import { describe, it, expect } from 'vitest';
import { createQueryConfig, QUERY_PRESETS } from './queryConfig';

describe('createQueryConfig', () => {
	it('returns DEFAULT preset when no options are provided', () => {
		const c = createQueryConfig();
		expect(c.defaultOptions?.queries?.staleTime).toBe(QUERY_PRESETS.DEFAULT?.queries?.staleTime);
	});

	it('returns REALTIME preset when requested', () => {
		const c = createQueryConfig({ preset: 'REALTIME' });
		expect(c.defaultOptions?.queries?.staleTime).toBe(0);
		expect(c.defaultOptions?.queries?.refetchOnWindowFocus).toBe(true);
		expect(c.defaultOptions?.queries?.refetchInterval).toBe(30_000);
	});

	it('returns STATIC preset with long staleTime and disabled refetches', () => {
		const c = createQueryConfig({ preset: 'STATIC' });
		expect(c.defaultOptions?.queries?.refetchOnWindowFocus).toBe(false);
		expect(c.defaultOptions?.queries?.refetchOnReconnect).toBe(false);
		expect(c.defaultOptions?.queries?.retry).toBe(0);
		expect(c.defaultOptions?.queries?.staleTime).toBeGreaterThan(10 * 60_000);
	});

	it('merges overrides on top of the preset', () => {
		const c = createQueryConfig({
			preset: 'DEFAULT',
			overrides: { queries: { retry: 5, staleTime: 999 } },
		});
		expect(c.defaultOptions?.queries?.retry).toBe(5);
		expect(c.defaultOptions?.queries?.staleTime).toBe(999);
		// Other base fields still present
		expect(c.defaultOptions?.queries?.refetchOnReconnect).toBe(true);
	});
});
