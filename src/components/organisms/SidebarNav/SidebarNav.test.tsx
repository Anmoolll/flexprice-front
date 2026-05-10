import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SidebarNav, { type SidebarNavSection } from './SidebarNav';

const sections: SidebarNavSection[] = [
	{
		title: 'Main',
		items: [
			{ id: 'dashboard', label: 'Dashboard' },
			{ id: 'customers', label: 'Customers' },
		],
	},
	{
		title: 'System',
		items: [{ id: 'settings', label: 'Settings', disabled: true }],
	},
];

describe('SidebarNav', () => {
	it('renders nav sections and items', () => {
		render(<SidebarNav sections={sections} activeId='dashboard' />);

		expect(screen.getByLabelText(/primary navigation/i)).toBeInTheDocument();
		expect(screen.getByText('Main')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /dashboard/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /customers/i })).toBeInTheDocument();
	});

	it('fires onSelect for enabled items only', () => {
		const onSelect = vi.fn();
		render(<SidebarNav sections={sections} activeId='dashboard' onSelect={onSelect} />);

		fireEvent.click(screen.getByRole('button', { name: /customers/i }));
		expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 'customers' }));

		fireEvent.click(screen.getByRole('button', { name: /settings/i }));
		expect(onSelect).toHaveBeenCalledTimes(1);
	});
});
