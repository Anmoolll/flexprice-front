import { describe, it, expect, beforeEach } from 'vitest';
import { DataType, FilterOperator, SortDirection } from '@/types/common/QueryBuilder';
import { useFilterStore, computeFilterFingerprint, FILTER_FINGERPRINT_PARAM, syncFingerprintToUrl } from './useFilterStore';

const KEY = 'test_list';

beforeEach(() => {
	sessionStorage.clear();
	useFilterStore.setState({ byKey: {} });
});

describe('useFilterStore', () => {
	it('returns empty state for an unseen key', () => {
		const state = useFilterStore.getState().getFilters(KEY);
		expect(state.filters).toEqual([]);
		expect(state.sorts).toEqual([]);
	});

	it('setFilters persists to sessionStorage and updates state', () => {
		useFilterStore.getState().setFilters(KEY, [
			{
				id: 'f1',
				field: 'name',
				operator: FilterOperator.CONTAINS,
				dataType: DataType.STRING,
				valueString: 'acme',
			},
		]);
		const state = useFilterStore.getState().getFilters(KEY);
		expect(state.filters).toHaveLength(1);
		expect(state.filters[0].valueString).toBe('acme');
		expect(sessionStorage.getItem(`filter_state_${KEY}`)).toBeTruthy();
	});

	it('setFilter adds a new filter when missing', () => {
		useFilterStore.getState().setFilter(KEY, 'status', {
			operator: FilterOperator.EQUAL,
			valueString: 'PAID',
			dataType: DataType.STRING,
		});
		const state = useFilterStore.getState().getFilters(KEY);
		expect(state.filters).toHaveLength(1);
		expect(state.filters[0].field).toBe('status');
		expect(state.filters[0].valueString).toBe('PAID');
	});

	it('setFilter patches an existing filter in place (by field)', () => {
		const store = useFilterStore.getState();
		store.setFilter(KEY, 'status', {
			operator: FilterOperator.EQUAL,
			valueString: 'DRAFT',
			dataType: DataType.STRING,
		});
		store.setFilter(KEY, 'status', { valueString: 'PAID' });
		const state = useFilterStore.getState().getFilters(KEY);
		expect(state.filters).toHaveLength(1);
		expect(state.filters[0].valueString).toBe('PAID');
	});

	it('removeFilter drops a single filter by field', () => {
		const store = useFilterStore.getState();
		store.setFilter(KEY, 'a', { operator: FilterOperator.EQUAL, valueString: '1' });
		store.setFilter(KEY, 'b', { operator: FilterOperator.EQUAL, valueString: '2' });
		store.removeFilter(KEY, 'a');
		const state = useFilterStore.getState().getFilters(KEY);
		expect(state.filters.map((f) => f.field)).toEqual(['b']);
	});

	it('resetFilters clears state for a key and persistence', () => {
		const store = useFilterStore.getState();
		store.setFilters(KEY, [{ id: '1', field: 'x', operator: FilterOperator.EQUAL, valueString: 'y' }]);
		store.resetFilters(KEY);
		const state = useFilterStore.getState().getFilters(KEY);
		expect(state).toEqual({ filters: [], sorts: [] });
	});

	it('hydrate reads from sessionStorage', () => {
		sessionStorage.setItem(
			`filter_state_${KEY}`,
			JSON.stringify({
				filters: JSON.stringify([
					{
						id: 'x',
						field: 'status',
						operator: FilterOperator.EQUAL,
						dataType: DataType.STRING,
						valueString: 'PAID',
					},
				]),
				sorts: JSON.stringify([{ field: 'createdAt', label: 'Created', direction: SortDirection.DESC }]),
			}),
		);
		const state = useFilterStore.getState().hydrate(KEY);
		expect(state.filters).toHaveLength(1);
		expect(state.filters[0].valueString).toBe('PAID');
		expect(state.sorts).toHaveLength(1);
	});

	it('setSorts updates only sorts, preserving filters', () => {
		const store = useFilterStore.getState();
		store.setFilter(KEY, 'a', { operator: FilterOperator.EQUAL, valueString: '1' });
		store.setSorts(KEY, [{ field: 'x', label: 'X', direction: SortDirection.ASC }]);
		const state = useFilterStore.getState().getFilters(KEY);
		expect(state.filters).toHaveLength(1);
		expect(state.sorts).toHaveLength(1);
	});
});

describe('fingerprint helpers', () => {
	it('empty state has an empty fingerprint', () => {
		expect(computeFilterFingerprint({ filters: [], sorts: [] })).toBe('');
	});

	it('equal states produce equal fingerprints', () => {
		const a = {
			filters: [{ id: '1', field: 'x', operator: FilterOperator.EQUAL, valueString: 'y' }],
			sorts: [],
		};
		expect(computeFilterFingerprint(a)).toBe(computeFilterFingerprint(a));
	});

	it('different states produce different fingerprints', () => {
		const a = {
			filters: [{ id: '1', field: 'x', operator: FilterOperator.EQUAL, valueString: 'a' }],
			sorts: [],
		};
		const b = {
			filters: [{ id: '1', field: 'x', operator: FilterOperator.EQUAL, valueString: 'b' }],
			sorts: [],
		};
		expect(computeFilterFingerprint(a)).not.toBe(computeFilterFingerprint(b));
	});

	it('syncFingerprintToUrl writes the param', () => {
		syncFingerprintToUrl({
			filters: [{ id: '1', field: 'x', operator: FilterOperator.EQUAL, valueString: 'y' }],
			sorts: [],
		});
		const url = new URL(window.location.href);
		expect(url.searchParams.get(FILTER_FINGERPRINT_PARAM)).toBeTruthy();
	});

	it('syncFingerprintToUrl removes the param for empty state', () => {
		syncFingerprintToUrl({ filters: [], sorts: [] });
		const url = new URL(window.location.href);
		expect(url.searchParams.get(FILTER_FINGERPRINT_PARAM)).toBeNull();
	});
});
