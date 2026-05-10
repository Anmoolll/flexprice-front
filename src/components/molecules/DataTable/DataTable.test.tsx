import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { useState } from 'react';
import type { SortingState } from '@tanstack/react-table';
import DataTable, { type DataTableColumnDef } from './DataTable';

interface Row {
	id: string;
	name: string;
	amount: number;
}

const columns: DataTableColumnDef<Row>[] = [
	{ accessorKey: 'name', header: 'Name' },
	{ accessorKey: 'amount', header: 'Amount' },
];

const rows: Row[] = [
	{ id: '1', name: 'Bravo', amount: 20 },
	{ id: '2', name: 'Alpha', amount: 10 },
	{ id: '3', name: 'Charlie', amount: 30 },
];

function ControlledSortingTable() {
	const [sorting, setSorting] = useState<SortingState>([]);
	return <DataTable<Row> data={rows} columns={columns} sorting={sorting} onSortingChange={setSorting} />;
}

describe('DataTable', () => {
	it('renders headers and rows', () => {
		render(<DataTable data={rows} columns={columns} />);
		expect(screen.getByText('Name')).toBeInTheDocument();
		expect(screen.getByText('Amount')).toBeInTheDocument();
		expect(screen.getByText('Alpha')).toBeInTheDocument();
		expect(screen.getByText('Bravo')).toBeInTheDocument();
		expect(screen.getByText('Charlie')).toBeInTheDocument();
	});

	it('renders skeleton rows while loading', () => {
		const { container } = render(<DataTable data={[]} columns={columns} isLoading skeletonRows={3} />);
		// Each skeleton is a div with animate-pulse class.
		expect(container.querySelectorAll('.animate-pulse').length).toBeGreaterThanOrEqual(3);
	});

	it('renders the default empty state when there are no rows', () => {
		render(<DataTable data={[]} columns={columns} />);
		expect(screen.getByText(/no results/i)).toBeInTheDocument();
	});

	it('renders a custom empty state', () => {
		render(<DataTable data={[]} columns={columns} emptyState={<span data-testid='custom-empty'>Nothing here</span>} />);
		expect(screen.getByTestId('custom-empty')).toBeInTheDocument();
	});

	it('toggles sorting on header click', () => {
		render(<ControlledSortingTable />);
		const header = screen.getByRole('button', { name: /name/i });
		expect(header).toHaveAttribute('aria-sort', 'none');
		fireEvent.click(header);
		expect(header).toHaveAttribute('aria-sort', 'ascending');
		fireEvent.click(header);
		expect(header).toHaveAttribute('aria-sort', 'descending');
	});
});
