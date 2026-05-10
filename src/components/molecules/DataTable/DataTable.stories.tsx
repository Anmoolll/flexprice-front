import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useMemo, useState } from 'react';
import type { SortingState } from '@tanstack/react-table';
import DataTable, { type DataTableColumnDef } from './DataTable';
import InvoiceStatusBadge, { type InvoiceStatus } from '../InvoiceStatusBadge';
import Chip from '@/components/atoms/Chip';

interface InvoiceRow {
	id: string;
	number: string;
	customer: string;
	amount: number;
	currency: string;
	status: InvoiceStatus;
	issuedAt: string;
}

const STATUSES: InvoiceStatus[] = ['DRAFT', 'PENDING', 'PAID', 'OVERDUE', 'FAILED', 'VOIDED'];
const CUSTOMERS = [
	'Acme Corp',
	'Initech',
	'Hooli',
	'Pied Piper',
	'Massive Dynamic',
	'Stark Industries',
	'Wayne Enterprises',
	'Soylent Green',
];

function makeRows(count: number): InvoiceRow[] {
	const rows: InvoiceRow[] = [];
	for (let i = 0; i < count; i++) {
		const d = new Date(2024, 0, 1);
		d.setDate(d.getDate() + i);
		rows.push({
			id: `inv_${i.toString().padStart(6, '0')}`,
			number: `INV-${(1000 + i).toString()}`,
			customer: CUSTOMERS[i % CUSTOMERS.length],
			amount: Math.round(Math.random() * 500000) / 100,
			currency: 'USD',
			status: STATUSES[i % STATUSES.length],
			issuedAt: d.toISOString().slice(0, 10),
		});
	}
	return rows;
}

const columns: DataTableColumnDef<InvoiceRow>[] = [
	{
		accessorKey: 'number',
		header: 'Invoice',
		cell: ({ row }) => (
			<div className='flex flex-col'>
				<span className='font-medium'>{row.original.number}</span>
				<span className='text-xs text-muted-foreground font-mono'>{row.original.id}</span>
			</div>
		),
	},
	{ accessorKey: 'customer', header: 'Customer' },
	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ row }) => <span className='tabular-nums'>${row.original.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => <InvoiceStatusBadge status={row.original.status} />,
	},
	{
		accessorKey: 'issuedAt',
		header: 'Issued',
		cell: ({ row }) => <Chip variant='default' label={row.original.issuedAt} />,
	},
];

/**
 * `DataTable` is the marquee component of this library. Generic over row type,
 * with TanStack Table sorting and TanStack Virtual row windowing. It scales
 * smoothly from a few rows to tens of thousands.
 */
const meta: Meta<typeof DataTable<InvoiceRow>> = {
	title: 'Molecules/DataTable',
	component: DataTable,
	tags: ['autodocs'],
	parameters: { layout: 'padded' },
	decorators: [
		(Story) => (
			<div className='w-full max-w-5xl'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof DataTable<InvoiceRow>>;

function Sortable({ rows }: { rows: InvoiceRow[] }) {
	const [sorting, setSorting] = useState<SortingState>([]);
	return <DataTable data={rows} columns={columns} sorting={sorting} onSortingChange={setSorting} caption='Recent invoices' />;
}

/** A handful of rows — renders as a static table (virtualization disabled). */
export const Default: Story = {
	render: () => {
		const rows = useMemo(() => makeRows(12), []);
		return <Sortable rows={rows} />;
	},
};

/** Skeleton loading state. */
export const Loading: Story = {
	render: () => <DataTable<InvoiceRow> data={[]} columns={columns} isLoading skeletonRows={6} />,
};

/** Empty state with a custom message. */
export const Empty: Story = {
	render: () => (
		<DataTable<InvoiceRow>
			data={[]}
			columns={columns}
			emptyState={
				<div className='flex flex-col items-center gap-2'>
					<p className='text-foreground font-medium'>No invoices yet</p>
					<p className='text-sm text-muted-foreground'>Issued invoices will show up here.</p>
				</div>
			}
		/>
	),
};

/**
 * **Marquee demo**: 10,000 rows rendered with TanStack Virtual.
 * Only the visible window is in the DOM — scroll, sort, and observe
 * smooth 60fps performance.
 */
export const TenThousandRows: Story = {
	name: '10,000 rows (virtualized)',
	render: () => {
		const rows = useMemo(() => makeRows(10_000), []);
		const [sorting, setSorting] = useState<SortingState>([]);
		return (
			<div className='space-y-3'>
				<div className='flex items-center justify-between'>
					<p className='text-sm text-muted-foreground'>
						Rendering <strong>{rows.length.toLocaleString()}</strong> invoice rows with windowed virtualization (48px estimated row, 12
						overscan).
					</p>
				</div>
				<DataTable
					data={rows}
					columns={columns}
					sorting={sorting}
					onSortingChange={setSorting}
					virtualized
					maxHeight={560}
					caption='10,000 mock invoices'
				/>
			</div>
		);
	},
};

/** Interaction test: clicks a sort header and asserts it toggled to ascending. */
export const SortingInteraction: Story = {
	render: () => {
		const rows = useMemo(() => makeRows(10), []);
		return <Sortable rows={rows} />;
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const header = canvas.getByRole('button', { name: /amount/i });
		await userEvent.click(header);
		await expect(header).toHaveAttribute('aria-sort', 'ascending');
		await userEvent.click(header);
		await expect(header).toHaveAttribute('aria-sort', 'descending');
	},
};
