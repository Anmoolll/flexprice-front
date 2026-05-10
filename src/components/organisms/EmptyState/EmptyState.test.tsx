import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from '@/components/atoms/Button/Button';
import EmptyState from './EmptyState';

describe('EmptyState', () => {
	it('renders title, description, and status semantics', () => {
		render(<EmptyState title='No invoices yet' description='When you create invoices, they will appear here.' />);

		expect(screen.getByRole('status')).toBeInTheDocument();
		expect(screen.getByText('No invoices yet')).toBeInTheDocument();
		expect(screen.getByText(/they will appear here/i)).toBeInTheDocument();
	});

	it('renders actions and allows interaction', () => {
		const onCreate = vi.fn();
		render(<EmptyState title='No customers' primaryAction={<Button onClick={onCreate}>Create customer</Button>} />);

		fireEvent.click(screen.getByRole('button', { name: /create customer/i }));
		expect(onCreate).toHaveBeenCalledTimes(1);
	});
});
