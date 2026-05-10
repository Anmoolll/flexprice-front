import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useState } from 'react';
import SearchBar from './SearchBar';

/**
 * `SearchBar` is a debounced search input with a clear button. Ideal for
 * filtering lists without flooding the backend on every keystroke.
 */
const meta: Meta<typeof SearchBar> = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
	tags: ['autodocs'],
	parameters: { layout: 'padded' },
	args: {
		placeholder: 'Search customers, invoices, plans…',
		debounceMs: 300,
		onSearch: fn(),
	},
	decorators: [
		(Story) => (
			<div className='w-[420px]'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const WithLabel: Story = {
	args: { label: 'Find a customer' },
};

export const Disabled: Story = {
	args: { disabled: true, value: 'read-only' },
};

/** Controlled example that mirrors state back to the user. */
export const Controlled: Story = {
	render: (args) => {
		const [q, setQ] = useState('');
		return (
			<div className='space-y-3'>
				<SearchBar {...args} value={q} onSearch={setQ} />
				<p className='text-sm text-muted-foreground'>
					Debounced query: <code className='font-mono'>{q || '—'}</code>
				</p>
			</div>
		);
	},
};

/** Interaction test: types a query and waits for the debounced callback. */
export const DebouncedInteraction: Story = {
	args: { debounceMs: 100 },
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox');
		await userEvent.type(input, 'flex');
		await waitFor(() => expect(args.onSearch).toHaveBeenCalledWith('flex'), { timeout: 1000 });
	},
};
