import type { QueryClientConfig } from '@tanstack/react-query';

/**
 * Named cache policies that describe how fresh a query's data must be and
 * how aggressively to refetch.
 */
export type QueryPreset = 'REALTIME' | 'DEFAULT' | 'STATIC';

/** Options accepted by `createQueryConfig`. */
export interface CreateQueryConfigOptions {
	/** Named cache policy. Defaults to `DEFAULT`. */
	preset?: QueryPreset;
	/** Override or extend the resolved default options. */
	overrides?: QueryClientConfig['defaultOptions'];
}

const MINUTE = 60_000;

/**
 * The three Flexprice cache presets, tuned for the three shapes of data
 * we commonly render.
 */
export const QUERY_PRESETS: Record<QueryPreset, QueryClientConfig['defaultOptions']> = {
	/**
	 * REALTIME — aggressively fresh data (usage dashboards, live counters).
	 * Always considered stale; refetches on focus and every 30s while mounted.
	 */
	REALTIME: {
		queries: {
			staleTime: 0,
			gcTime: 1 * MINUTE,
			refetchOnMount: 'always',
			refetchOnWindowFocus: true,
			refetchOnReconnect: true,
			refetchInterval: 30_000,
			retry: 2,
		},
	},
	/**
	 * DEFAULT — good general-purpose policy. Fresh for 1 minute, garbage
	 * collected after 10 minutes.
	 */
	DEFAULT: {
		queries: {
			staleTime: 1 * MINUTE,
			gcTime: 10 * MINUTE,
			refetchOnMount: true,
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
			retry: 1,
		},
	},
	/**
	 * STATIC — data that rarely changes during a session (enum lists,
	 * constants). Kept fresh for 1 hour, garbage collected after 24h.
	 */
	STATIC: {
		queries: {
			staleTime: 60 * MINUTE,
			gcTime: 24 * 60 * MINUTE,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: 0,
		},
	},
};

/**
 * Compose a `QueryClientConfig` from a named preset with optional overrides.
 *
 * @example
 * const qc = new QueryClient(createQueryConfig({ preset: 'STATIC' }));
 *
 * @example
 * // Extend a preset with custom retry logic
 * const qc = new QueryClient(
 *   createQueryConfig({
 *     preset: 'DEFAULT',
 *     overrides: { queries: { retry: (failureCount, err) => failureCount < 3 } },
 *   }),
 * );
 */
export function createQueryConfig(options: CreateQueryConfigOptions = {}): QueryClientConfig {
	const preset = options.preset ?? 'DEFAULT';
	const base = QUERY_PRESETS[preset];
	const override = options.overrides ?? {};
	return {
		defaultOptions: {
			queries: { ...(base?.queries ?? {}), ...(override.queries ?? {}) },
			mutations: { ...(base?.mutations ?? {}), ...(override.mutations ?? {}) },
		},
	};
}
