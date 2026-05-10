import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { FileText, Users, CreditCard } from 'lucide-react';
import Button from '@/components/atoms/Button/Button';
import EmptyState from './EmptyState';

/**
 * `EmptyState` is the canonical empty-result pattern. Use it wherever a page,
 * card, or table has no data to display.
 */
const meta: Meta<typeof EmptyState> = {
	title: 'Organisms/EmptyState',
	component: EmptyState,
	tags: ['autodocs'],
	parameters: { layout: 'padded' },
	argTypes: {
		size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
	},
	args: {
		title: 'No invoices yet',
		description: 'When you issue invoices they’ll show up here.',
		size: 'md',
	},
	decorators: [
		(Story) => (
			<div className='w-full max-w-xl'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const WithActions: Story = {
	args: {
		title: 'No customers yet',
		description: 'Create your first customer to start tracking usage and billing.',
		icon: <Users size={22} />,
		primaryAction: <Button>Create customer</Button>,
		secondaryAction: (
			<Button variant='ghost' size='sm'>
				Import CSV
			</Button>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const primaryButton = canvas.getByRole('button', { name: /create customer/i });
		await userEvent.click(primaryButton);
		await expect(canvas.getByRole('status')).toBeInTheDocument();
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
		icon: <FileText size={20} />,
		title: 'No drafts',
		description: 'Nothing saved yet.',
	},
};

export const Large: Story = {
	args: {
		size: 'lg',
		icon: <CreditCard size={22} />,
		title: 'No payment methods',
		description: 'Add a card to charge invoices automatically at cycle end.',
		primaryAction: <Button>Add card</Button>,
	},
};

export const LoadingLike: Story = {
	args: {
		title: 'Fetching invoices',
		description: 'Please wait while we sync your latest billing activity.',
		icon: (
			<span className='inline-block h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin' aria-label='Loading' />
		),
	},
};

export const ErrorRecovery: Story = {
	args: {
		title: 'Unable to load invoices',
		description: 'Something went wrong while fetching data. Try again in a moment.',
		icon: <CreditCard size={22} />,
		primaryAction: <Button variant='destructive'>Retry</Button>,
		secondaryAction: <Button variant='ghost'>View logs</Button>,
	},
};
