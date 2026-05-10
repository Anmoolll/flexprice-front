import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SidebarNavItem {
	/** Unique ID used as the React key and match target for `activeId`. */
	id: string;
	/** Displayed label. */
	label: string;
	/** Leading icon. */
	icon?: ReactNode;
	/** Trailing adornment (badge, count, chevron, etc.). */
	trailing?: ReactNode;
	/** Optional href — renders the item as an anchor. */
	href?: string;
	/** Disable interaction. */
	disabled?: boolean;
}

export interface SidebarNavSection {
	/** Optional section header. */
	title?: string;
	/** Items in this section. */
	items: SidebarNavItem[];
}

interface SidebarNavProps {
	/** Sidebar header content (logo, workspace switcher, etc.). */
	header?: ReactNode;
	/** Grouped navigation items. */
	sections: SidebarNavSection[];
	/** ID of the currently-active item. */
	activeId?: string;
	/** Called when an item is clicked. */
	onSelect?: (item: SidebarNavItem) => void;
	/** Sidebar footer content (user card, settings, etc.). */
	footer?: ReactNode;
	/** Additional wrapper classes. */
	className?: string;
}

/**
 * `SidebarNav` is a reusable, app-agnostic vertical navigation. It does not
 * assume routing — pass `onSelect` to integrate with whatever router you
 * use, or pass an `href` on each item to render native anchors.
 */
const SidebarNav: FC<SidebarNavProps> = ({ header, sections, activeId, onSelect, footer, className }) => {
	return (
		<aside aria-label='Primary navigation' className={cn('flex flex-col h-full w-64 bg-white border-r border-border text-sm', className)}>
			{header && <div className='px-4 py-4 border-b border-border'>{header}</div>}
			<nav className='flex-1 overflow-y-auto py-3'>
				{sections.map((section, idx) => (
					<div key={idx} className={cn(idx !== 0 && 'mt-4')}>
						{section.title && (
							<p className='px-5 mb-1 text-[11px] uppercase tracking-wide text-muted-foreground font-medium'>{section.title}</p>
						)}
						<ul className='space-y-0.5 px-2'>
							{section.items.map((item) => {
								const isActive = item.id === activeId;
								const className = cn(
									'w-full flex items-center gap-2 px-3 py-2 rounded-[6px] text-left transition-colors',
									isActive ? 'bg-[#F0F2F5] text-[#111827] font-medium' : 'text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#111827]',
									item.disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
								);
								const inner = (
									<>
										{item.icon && <span className='shrink-0'>{item.icon}</span>}
										<span className='flex-1 truncate'>{item.label}</span>
										{item.trailing && <span className='shrink-0'>{item.trailing}</span>}
									</>
								);
								return (
									<li key={item.id}>
										{item.href ? (
											<a
												href={item.href}
												aria-current={isActive ? 'page' : undefined}
												onClick={(e) => {
													if (onSelect) {
														e.preventDefault();
														onSelect(item);
													}
												}}
												className={className}>
												{inner}
											</a>
										) : (
											<button
												type='button'
												aria-current={isActive ? 'page' : undefined}
												disabled={item.disabled}
												onClick={() => onSelect?.(item)}
												className={className}>
												{inner}
											</button>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</nav>
			{footer && <div className='px-4 py-3 border-t border-border'>{footer}</div>}
		</aside>
	);
};

export default SidebarNav;
