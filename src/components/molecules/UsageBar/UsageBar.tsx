import { FC, ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type Tone = 'neutral' | 'success' | 'warning' | 'danger';

const TONE_BAR: Record<Tone, string> = {
	neutral: '[&>div]:bg-[#3293D9]',
	success: '[&>div]:bg-[#16A34A]',
	warning: '[&>div]:bg-[#C2410C]',
	danger: '[&>div]:bg-[#DC2626]',
};

const TONE_TRACK: Record<Tone, string> = {
	neutral: 'bg-[#E5F0FF]',
	success: 'bg-[#ECFBE4]',
	warning: 'bg-[#FFF7ED]',
	danger: 'bg-[#FEE2E2]',
};

interface UsageBarProps {
	/** Current consumed value. */
	value: number;
	/** Total allotted value. Pass `Infinity` or omit for an unlimited meter. */
	limit?: number;
	/** Optional label rendered above the bar. */
	label?: ReactNode;
	/** Formatter for the numeric value + limit (defaults to `toLocaleString`). */
	formatValue?: (n: number) => string;
	/** Threshold → tone overrides. Defaults to 75% warning / 95% danger. */
	thresholds?: { warning?: number; danger?: number };
	/** Force a specific tone (skips threshold logic). */
	tone?: Tone;
	/** Hide the percentage text on the right. */
	hidePercentage?: boolean;
	/** Additional wrapper classes. */
	className?: string;
}

const defaultFormat = (n: number) => n.toLocaleString();

/**
 * `UsageBar` visualises consumption against a limit with threshold-aware
 * colors. Accessible: exposes `role="progressbar"` with `aria-valuenow` via
 * the underlying Radix Progress primitive.
 */
const UsageBar: FC<UsageBarProps> = ({ value, limit, label, formatValue = defaultFormat, thresholds, tone, hidePercentage, className }) => {
	const unlimited = limit === undefined || !Number.isFinite(limit);
	const pct = unlimited ? 0 : Math.max(0, Math.min(100, (value / (limit || 1)) * 100));

	const warning = thresholds?.warning ?? 75;
	const danger = thresholds?.danger ?? 95;

	const resolvedTone: Tone = tone ?? (unlimited ? 'neutral' : pct >= danger ? 'danger' : pct >= warning ? 'warning' : 'success');

	return (
		<div className={cn('w-full space-y-1.5', className)}>
			<div className='flex items-center justify-between text-sm'>
				<span className='text-[#111827] font-medium'>{label}</span>
				<span className='text-muted-foreground tabular-nums'>
					{formatValue(value)}
					{unlimited ? ' – unlimited' : ` / ${formatValue(limit!)}`}
					{!unlimited && !hidePercentage && ` (${pct.toFixed(0)}%)`}
				</span>
			</div>
			<Progress value={unlimited ? 100 : pct} className={cn('h-2', TONE_TRACK[resolvedTone], TONE_BAR[resolvedTone])} />
		</div>
	);
};

export default UsageBar;
