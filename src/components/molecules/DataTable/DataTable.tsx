import { useRef, type CSSProperties, type ReactNode } from 'react';
import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	flexRender,
	type ColumnDef,
	type SortingState,
	type OnChangeFn,
	type Table as TanstackTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export type DataTableColumnDef<T> = ColumnDef<T>;

interface DataTableProps<T> {
	/** The rows to render. */
	data: T[];
	/** TanStack Table column definitions. */
	columns: DataTableColumnDef<T>[];
	/** Show skeleton loading state. */
	isLoading?: boolean;
	/** Number of skeleton rows to render in loading state. Default 8. */
	skeletonRows?: number;
	/** Custom empty-state renderer (defaults to a centered text block). */
	emptyState?: ReactNode;
	/** Controlled sorting state. */
	sorting?: SortingState;
	/** Controlled sorting change handler. */
	onSortingChange?: OnChangeFn<SortingState>;
	/** Force-enable virtualization regardless of data size. Default: auto (>50 rows). */
	virtualized?: boolean;
	/** Estimated row height for the virtualizer. Default 48px. */
	estimatedRowHeight?: number;
	/** Scroll overscan (rows rendered beyond the viewport on each side). Default 12. */
	overscan?: number;
	/** Height of the scroll container (only applies when virtualized). Default 560. */
	maxHeight?: number | string;
	/** Additional class for the outer wrapper. */
	className?: string;
	/** Optional row click handler. */
	onRowClick?: (row: T) => void;
	/** Optional accessible caption for screen readers. */
	caption?: string;
}

const SortIcon = ({ direction }: { direction: false | 'asc' | 'desc' }) => {
	if (direction === 'asc') return <ArrowUp size={12} className='text-foreground' />;
	if (direction === 'desc') return <ArrowDown size={12} className='text-foreground' />;
	return <ChevronsUpDown size={12} className='text-muted-foreground opacity-60' />;
};

/**
 * `DataTable` is a generic, accessible, optionally-virtualized table.
 *
 * - Built on **TanStack Table v8** for sorting and column plumbing.
 * - Uses **TanStack Virtual** to render only visible rows, enabling smooth
 *   scrolling over tens of thousands of rows.
 * - Fully generic via `<T,>` — pass your row type and `ColumnDef<T>[]`.
 * - Supports skeleton loading, empty states, and row click handlers.
 */
function DataTable<T>({
	data,
	columns,
	isLoading,
	skeletonRows = 8,
	emptyState,
	sorting,
	onSortingChange,
	virtualized,
	estimatedRowHeight = 48,
	overscan = 12,
	maxHeight = 560,
	className,
	onRowClick,
	caption,
}: DataTableProps<T>) {
	const table = useReactTable<T>({
		data,
		columns,
		state: sorting ? { sorting } : undefined,
		onSortingChange,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	const rows = table.getRowModel().rows;
	const shouldVirtualize = virtualized ?? rows.length > 50;

	return (
		<div className={cn('w-full rounded-[6px] border border-border bg-white overflow-hidden', className)}>
			{shouldVirtualize ? (
				<VirtualizedBody
					table={table}
					isLoading={!!isLoading}
					skeletonRows={skeletonRows}
					emptyState={emptyState}
					estimatedRowHeight={estimatedRowHeight}
					overscan={overscan}
					maxHeight={maxHeight}
					onRowClick={onRowClick}
					caption={caption}
				/>
			) : (
				<StaticBody
					table={table}
					isLoading={!!isLoading}
					skeletonRows={skeletonRows}
					emptyState={emptyState}
					onRowClick={onRowClick}
					caption={caption}
				/>
			)}
		</div>
	);
}

interface BodyProps<T> {
	table: TanstackTable<T>;
	isLoading: boolean;
	skeletonRows: number;
	emptyState?: ReactNode;
	onRowClick?: (row: T) => void;
	caption?: string;
}

const headerRowClass = 'bg-[#F9FAFB] border-b border-border';
const headerCellClass = 'text-left text-xs font-medium text-[#57646E] px-4 py-3 select-none whitespace-nowrap';
const dataCellClass = 'px-4 py-3 text-sm text-[#111827] align-middle';
const rowClass = 'border-b border-border last:border-0 hover:bg-[#F9FAFB]/60 transition-colors';

function renderHeaders<T>(table: TanstackTable<T>) {
	return table.getHeaderGroups().map((hg) => (
		<tr key={hg.id} className={headerRowClass}>
			{hg.headers.map((header) => {
				const canSort = header.column.getCanSort();
				const sortDir = header.column.getIsSorted();
				return (
					<th
						key={header.id}
						scope='col'
						className={headerCellClass}
						style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}>
						{header.isPlaceholder ? null : canSort ? (
							<button
								type='button'
								onClick={header.column.getToggleSortingHandler()}
								className='inline-flex items-center gap-1 hover:text-foreground transition-colors'
								aria-sort={sortDir === 'asc' ? 'ascending' : sortDir === 'desc' ? 'descending' : 'none'}>
								{flexRender(header.column.columnDef.header, header.getContext())}
								<SortIcon direction={sortDir} />
							</button>
						) : (
							flexRender(header.column.columnDef.header, header.getContext())
						)}
					</th>
				);
			})}
		</tr>
	));
}

function StaticBody<T>({ table, isLoading, skeletonRows, emptyState, onRowClick, caption }: BodyProps<T>) {
	const rows = table.getRowModel().rows;
	const colCount = table.getAllLeafColumns().length;

	if (isLoading) {
		return (
			<table className='w-full table-auto'>
				{caption && <caption className='sr-only'>{caption}</caption>}
				<thead>{renderHeaders(table)}</thead>
				<tbody>
					{Array.from({ length: skeletonRows }).map((_, i) => (
						<tr key={i} className={rowClass}>
							{Array.from({ length: colCount }).map((_, j) => (
								<td key={j} className={dataCellClass}>
									<Skeleton className='h-4 w-3/4' />
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}

	if (rows.length === 0) {
		return (
			<table className='w-full table-auto'>
				{caption && <caption className='sr-only'>{caption}</caption>}
				<thead>{renderHeaders(table)}</thead>
				<tbody>
					<tr>
						<td colSpan={colCount} className='px-4 py-12 text-center text-sm text-muted-foreground'>
							{emptyState ?? 'No results to display.'}
						</td>
					</tr>
				</tbody>
			</table>
		);
	}

	return (
		<table className='w-full table-auto'>
			{caption && <caption className='sr-only'>{caption}</caption>}
			<thead>{renderHeaders(table)}</thead>
			<tbody>
				{rows.map((row) => (
					<tr
						key={row.id}
						className={cn(rowClass, onRowClick && 'cursor-pointer')}
						onClick={onRowClick ? () => onRowClick(row.original) : undefined}>
						{row.getVisibleCells().map((cell) => (
							<td key={cell.id} className={dataCellClass}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

interface VirtualBodyProps<T> extends BodyProps<T> {
	estimatedRowHeight: number;
	overscan: number;
	maxHeight: number | string;
}

function VirtualizedBody<T>({
	table,
	isLoading,
	skeletonRows,
	emptyState,
	estimatedRowHeight,
	overscan,
	maxHeight,
	onRowClick,
	caption,
}: VirtualBodyProps<T>) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const rows = table.getRowModel().rows;
	const colCount = table.getAllLeafColumns().length;

	const virtualizer = useVirtualizer({
		count: rows.length,
		getScrollElement: () => containerRef.current,
		estimateSize: () => estimatedRowHeight,
		overscan,
	});

	const virtualRows = virtualizer.getVirtualItems();
	const totalSize = virtualizer.getTotalSize();
	const paddingTop = virtualRows.length > 0 ? virtualRows[0].start : 0;
	const paddingBottom = virtualRows.length > 0 ? totalSize - virtualRows[virtualRows.length - 1].end : 0;

	const containerStyle: CSSProperties = {
		maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
	};

	return (
		<div ref={containerRef} className='overflow-auto' style={containerStyle}>
			<table className='w-full table-auto'>
				{caption && <caption className='sr-only'>{caption}</caption>}
				<thead className='sticky top-0 z-[1]'>{renderHeaders(table)}</thead>
				<tbody>
					{isLoading ? (
						Array.from({ length: skeletonRows }).map((_, i) => (
							<tr key={i} className={rowClass}>
								{Array.from({ length: colCount }).map((_, j) => (
									<td key={j} className={dataCellClass}>
										<Skeleton className='h-4 w-3/4' />
									</td>
								))}
							</tr>
						))
					) : rows.length === 0 ? (
						<tr>
							<td colSpan={colCount} className='px-4 py-12 text-center text-sm text-muted-foreground'>
								{emptyState ?? 'No results to display.'}
							</td>
						</tr>
					) : (
						<>
							{paddingTop > 0 && (
								<tr>
									<td colSpan={colCount} style={{ height: paddingTop }} aria-hidden />
								</tr>
							)}
							{virtualRows.map((vr) => {
								const row = rows[vr.index];
								return (
									<tr
										key={row.id}
										data-index={vr.index}
										className={cn(rowClass, onRowClick && 'cursor-pointer')}
										onClick={onRowClick ? () => onRowClick(row.original) : undefined}>
										{row.getVisibleCells().map((cell) => (
											<td key={cell.id} className={dataCellClass}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</td>
										))}
									</tr>
								);
							})}
							{paddingBottom > 0 && (
								<tr>
									<td colSpan={colCount} style={{ height: paddingBottom }} aria-hidden />
								</tr>
							)}
						</>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default DataTable;
