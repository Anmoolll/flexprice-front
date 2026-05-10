import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

/**
 * `Spinner` is a lightweight inline loading indicator. It inherits its color
 * from the parent's `color` / text color and scales via the `size` prop.
 */
const meta: Meta<typeof Spinner> = {
	title: 'Atoms/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	args: { size: 24 },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Sizes: Story = {
	parameters: { layout: 'padded' },
	render: () => (
		<div className='flex items-center gap-6'>
			<Spinner size={16} />
			<Spinner size={24} />
			<Spinner size={40} />
			<Spinner size={64} />
		</div>
	),
};

export const InheritsColor: Story = {
	parameters: { layout: 'padded' },
	render: () => (
		<div className='flex items-center gap-6'>
			<span className='text-primary'>
				<Spinner />
			</span>
			<span className='text-destructive'>
				<Spinner />
			</span>
			<span className='text-[#16A34A]'>
				<Spinner />
			</span>
			<span className='text-muted-foreground'>
				<Spinner />
			</span>
		</div>
	),
};

export const InlineLoadingState: Story = {
	parameters: { layout: 'padded' },
	render: () => (
		<div className='inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm text-muted-foreground'>
			<Spinner size={14} />
			<span>Syncing usage data...</span>
		</div>
	),
};
