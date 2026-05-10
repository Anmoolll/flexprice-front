import { FC, ReactNode } from 'react';
import { Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
	/** Large illustrative icon. Defaults to an inbox glyph. */
	icon?: ReactNode;
	/** Primary heading. */
	title: string;
	/** Supporting copy. */
	description?: string;
	/** Primary call-to-action (e.g. a `<Button>`). */
	primaryAction?: ReactNode;
	/** Optional secondary action. */
	secondaryAction?: ReactNode;
	/** Visual tone — compact or full-bleed. */
	size?: 'sm' | 'md' | 'lg';
	/** Additional wrapper classes. */
	className?: string;
}

const SIZE_CLASSES: Record<NonNullable<EmptyStateProps['size']>, string> = {
	sm: 'py-8 px-6',
	md: 'py-12 px-8',
	lg: 'py-16 px-10',
};

/**
 * `EmptyState` is the canonical “no data yet” pattern. Use it at the root
 * of a page, inside a card, or as a `DataTable` empty slot.
 */
const EmptyState: FC<EmptyStateProps> = ({ icon, title, description, primaryAction, secondaryAction, size = 'md', className }) => {
	return (
		<div
			role='status'
			className={cn(
				'flex flex-col items-center justify-center text-center bg-white border border-border rounded-[6px]',
				SIZE_CLASSES[size],
				className,
			)}>
			<div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F2F5] text-[#57646E] mb-4'>
				{icon ?? <Inbox size={22} />}
			</div>
			<h3 className='text-base font-medium text-[#111827]'>{title}</h3>
			{description && <p className='mt-1 max-w-md text-sm text-muted-foreground'>{description}</p>}
			{(primaryAction || secondaryAction) && (
				<div className='mt-5 flex flex-wrap items-center justify-center gap-2'>
					{primaryAction}
					{secondaryAction}
				</div>
			)}
		</div>
	);
};

export default EmptyState;
