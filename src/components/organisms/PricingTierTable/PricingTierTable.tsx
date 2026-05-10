import { FC, ReactNode } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PricingTier {
	/** Unique ID. */
	id: string;
	/** Tier name (e.g., "Starter"). */
	name: string;
	/** Short tagline under the name. */
	description?: string;
	/** Price string — fully formatted (e.g., "$49 / mo"). */
	price: string;
	/** Optional highlight (marks this tier as the recommended plan). */
	highlight?: boolean;
	/** Optional CTA rendered below the price. */
	cta?: ReactNode;
}

export interface PricingFeatureRow {
	/** Feature label (row name). */
	label: string;
	/**
	 * Per-tier value. Booleans render check/cross marks; strings are shown
	 * verbatim. Keyed by tier `id`.
	 */
	values: Record<string, boolean | string>;
}

interface PricingTierTableProps {
	/** Ordered list of tiers shown as columns. */
	tiers: PricingTier[];
	/** Ordered list of feature rows. */
	features: PricingFeatureRow[];
	/** Additional wrapper classes. */
	className?: string;
}

/**
 * `PricingTierTable` compares plans side-by-side. Fully data-driven — pass
 * `tiers` (columns) and `features` (rows). Booleans render as check/minus
 * icons; strings are rendered verbatim.
 */
const PricingTierTable: FC<PricingTierTableProps> = ({ tiers, features, className }) => {
	return (
		<div className={cn('w-full rounded-[6px] border border-border bg-white overflow-hidden', className)}>
			<table className='w-full table-fixed'>
				<thead>
					<tr className='border-b border-border'>
						<th className='text-left px-5 py-5 w-1/4'>
							<span className='sr-only'>Feature</span>
						</th>
						{tiers.map((t) => (
							<th key={t.id} scope='col' className={cn('px-5 py-5 text-left align-top', t.highlight && 'bg-[#EFF8FF]')}>
								<div className='flex items-center gap-2'>
									<span className='text-base font-medium text-[#111827]'>{t.name}</span>
									{t.highlight && (
										<span className='inline-flex items-center rounded-full bg-[#2F6FE2] px-2 py-0.5 text-[10px] font-medium text-white uppercase tracking-wide'>
											Recommended
										</span>
									)}
								</div>
								{t.description && <p className='mt-1 text-xs text-muted-foreground'>{t.description}</p>}
								<p className='mt-3 text-xl font-semibold text-[#111827]'>{t.price}</p>
								{t.cta && <div className='mt-3'>{t.cta}</div>}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{features.map((row) => (
						<tr key={row.label} className='border-b border-border last:border-0'>
							<th scope='row' className='text-left px-5 py-3.5 text-sm font-normal text-[#111827]'>
								{row.label}
							</th>
							{tiers.map((t) => {
								const v = row.values[t.id];
								return (
									<td key={t.id} className={cn('px-5 py-3.5 text-sm', t.highlight && 'bg-[#EFF8FF]/40')}>
										{typeof v === 'boolean' ? (
											v ? (
												<Check size={16} className='text-[#16A34A]' aria-label='included' />
											) : (
												<Minus size={16} className='text-muted-foreground' aria-label='not included' />
											)
										) : (
											<span>{v ?? '—'}</span>
										)}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PricingTierTable;
