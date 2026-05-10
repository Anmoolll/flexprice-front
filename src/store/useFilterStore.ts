import { create } from 'zustand';
import type { FilterCondition, SortOption } from '@/types/common/QueryBuilder';
import {
	getFilterStateSessionKey,
	serializeFilters,
	deserializeFilters,
	serializeSorts,
	deserializeSorts,
} from '@/utils/filterPersistence';

/**
 * Per-route / per-list filter state. The `key` is opaque to the store and
 * typically derives from a route segment or a list identifier
 * (e.g. `fetchCustomers`, `fetchInvoices`).
 */
export interface FilterState {
	filters: FilterCondition[];
	sorts: SortOption[];
}

const EMPTY_STATE: FilterState = { filters: [], sorts: [] };

interface FilterStoreShape {
	/** All active filter states, indexed by key. */
	byKey: Record<string, FilterState>;
	/** Read the current state for a key (always returns an object — never undefined). */
	getFilters: (key: string) => FilterState;
	/** Replace the filters array for a key. Persists to sessionStorage. */
	setFilters: (key: string, filters: FilterCondition[]) => void;
	/** Replace the sorts array for a key. Persists to sessionStorage. */
	setSorts: (key: string, sorts: SortOption[]) => void;
	/** Update a single filter (by `field`). Adds if missing, updates otherwise. */
	setFilter: (key: string, field: string, patch: Partial<FilterCondition>) => void;
	/** Remove a single filter by `field`. */
	removeFilter: (key: string, field: string) => void;
	/** Clear all filters + sorts for a key. */
	resetFilters: (key: string) => void;
	/** Hydrate a key from sessionStorage. Returns the hydrated state. */
	hydrate: (key: string) => FilterState;
}

function readFromSession(key: string): FilterState {
	if (typeof window === 'undefined') return EMPTY_STATE;
	try {
		const raw = sessionStorage.getItem(getFilterStateSessionKey(key));
		if (!raw?.trim()) return EMPTY_STATE;
		const parsed = JSON.parse(raw) as { filters?: string; sorts?: string };
		const filters = parsed.filters ? (deserializeFilters(parsed.filters) ?? []) : [];
		const sorts = parsed.sorts ? (deserializeSorts(parsed.sorts) ?? []) : [];
		return { filters, sorts };
	} catch {
		return EMPTY_STATE;
	}
}

function writeToSession(key: string, state: FilterState): void {
	if (typeof window === 'undefined') return;
	try {
		sessionStorage.setItem(
			getFilterStateSessionKey(key),
			JSON.stringify({
				filters: serializeFilters(state.filters),
				sorts: serializeSorts(state.sorts),
			}),
		);
	} catch {
		// ignore quota / disabled storage errors
	}
}

/**
 * `useFilterStore` is the canonical place to read / write persisted filter
 * state across the app.
 *
 * - Keyed by an opaque string (usually a route or list identifier).
 * - Automatically persisted to `sessionStorage` (survives tab reloads; is
 *   cleared when the tab closes).
 * - Exposes a clean imperative API (`setFilter`, `resetFilters`, `getFilters`).
 *
 * For URL sharing, pair this store with `computeFilterFingerprint` and the
 * `syncFingerprintToUrl` helper below.
 */
export const useFilterStore = create<FilterStoreShape>((set, get) => ({
	byKey: {},

	getFilters: (key) => get().byKey[key] ?? EMPTY_STATE,

	setFilters: (key, filters) => {
		const current = get().byKey[key] ?? EMPTY_STATE;
		const next: FilterState = { ...current, filters };
		writeToSession(key, next);
		set((s) => ({ byKey: { ...s.byKey, [key]: next } }));
	},

	setSorts: (key, sorts) => {
		const current = get().byKey[key] ?? EMPTY_STATE;
		const next: FilterState = { ...current, sorts };
		writeToSession(key, next);
		set((s) => ({ byKey: { ...s.byKey, [key]: next } }));
	},

	setFilter: (key, field, patch) => {
		const current = get().byKey[key] ?? EMPTY_STATE;
		const existing = current.filters.find((f) => f.field === field);
		const nextFilters: FilterCondition[] = existing
			? current.filters.map((f) => (f.field === field ? { ...f, ...patch } : f))
			: [
					...current.filters,
					{
						id: patch.id ?? `${field}_${Date.now()}`,
						field,
						operator: patch.operator!,
						...patch,
					} as FilterCondition,
				];
		const next: FilterState = { ...current, filters: nextFilters };
		writeToSession(key, next);
		set((s) => ({ byKey: { ...s.byKey, [key]: next } }));
	},

	removeFilter: (key, field) => {
		const current = get().byKey[key] ?? EMPTY_STATE;
		const next: FilterState = {
			...current,
			filters: current.filters.filter((f) => f.field !== field),
		};
		writeToSession(key, next);
		set((s) => ({ byKey: { ...s.byKey, [key]: next } }));
	},

	resetFilters: (key) => {
		writeToSession(key, EMPTY_STATE);
		set((s) => ({ byKey: { ...s.byKey, [key]: EMPTY_STATE } }));
	},

	hydrate: (key) => {
		const hydrated = readFromSession(key);
		set((s) => ({ byKey: { ...s.byKey, [key]: hydrated } }));
		return hydrated;
	},
}));

/* -------------------------------------------------------------------------- */
/* URL fingerprint helpers                                                    */
/* -------------------------------------------------------------------------- */

/** The URL param used by `syncFingerprintToUrl`. */
export const FILTER_FINGERPRINT_PARAM = 'fp';

/**
 * Compute a short, stable fingerprint for a given filter state. The
 * fingerprint is **not reversible** — it is intended purely as a
 * cache-busting token that identifies "the same set of filters" across
 * reloads. Full state lives in sessionStorage.
 */
export function computeFilterFingerprint(state: FilterState): string {
	if (state.filters.length === 0 && state.sorts.length === 0) return '';
	const payload = serializeFilters(state.filters) + '|' + serializeSorts(state.sorts);
	let hash = 5381;
	for (let i = 0; i < payload.length; i++) {
		hash = ((hash << 5) + hash + payload.charCodeAt(i)) | 0; // djb2
	}
	return Math.abs(hash).toString(36);
}

/**
 * Write the current filter-state fingerprint into the URL under `?fp=<hash>`.
 * Safe to call in components / effects; no-ops on the server.
 */
export function syncFingerprintToUrl(state: FilterState): void {
	if (typeof window === 'undefined') return;
	const fp = computeFilterFingerprint(state);
	const url = new URL(window.location.href);
	if (fp) url.searchParams.set(FILTER_FINGERPRINT_PARAM, fp);
	else url.searchParams.delete(FILTER_FINGERPRINT_PARAM);
	window.history.replaceState({}, '', url.toString());
}

/* -------------------------------------------------------------------------- */
/* Convenience selector hook                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Convenience selector that exposes a single filter key's state and a
 * bound API. Use inside a component to read+write one route's filters
 * without remembering the key on every call.
 */
export function useRouteFilters(key: string) {
	const state = useFilterStore((s) => s.byKey[key] ?? EMPTY_STATE);
	const setFilters = useFilterStore((s) => s.setFilters);
	const setSorts = useFilterStore((s) => s.setSorts);
	const setFilter = useFilterStore((s) => s.setFilter);
	const removeFilter = useFilterStore((s) => s.removeFilter);
	const resetFilters = useFilterStore((s) => s.resetFilters);
	const hydrate = useFilterStore((s) => s.hydrate);
	return {
		...state,
		setFilters: (filters: FilterCondition[]) => setFilters(key, filters),
		setSorts: (sorts: SortOption[]) => setSorts(key, sorts),
		setFilter: (field: string, patch: Partial<FilterCondition>) => setFilter(key, field, patch),
		removeFilter: (field: string) => removeFilter(key, field),
		resetFilters: () => resetFilters(key),
		hydrate: () => hydrate(key),
	};
}
