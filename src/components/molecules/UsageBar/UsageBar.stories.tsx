import type { Meta, StoryObj } from '@storybook/react';
import UsageBar from './UsageBar';

/**
 * `UsageBar` visualises consumption against a limit with threshold-aware
 * coloring. Use it for API quotas, credits, seats, and any other metered
 * resource shown in the Flexprice dashboard.
 */
const meta: Meta<typeof UsageBar> = {
	title: 'Molecules/UsageBar',
	component: UsageBar,
	tags: ['autodocs'],
	parameters: { layout: 'padded' },
	argTypes: {
		tone: { control: 'inline-radio', options: [undefined, 'neutral', 'success', 'warning', 'danger'] },
		hidePercentage: { control: 'boolean' },
	},
	args: { label: 'API events', value: 4800, limit: 10000 },
	decorators: [
		(Story) => (
			<div className='w-[360px]'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof UsageBar>;

export const Ok: Story = {};

export const Warning: Story = { args: { value: 8200 } };

export const Danger: Story = { args: { value: 9700 } };

export const Full: Story = { args: { value: 10000 } };

export const Unlimited: Story = {
	args: { label: 'Active seats', value: 42, limit: Infinity },
};

export const CustomFormatter: Story = {
	args: {
		label: 'Bandwidth',
		value: 74.2,
		limit: 100,
		formatValue: (n) => `${n.toFixed(1)} GB`,
	},
};

export const HiddenPercentage: Story = {
	args: {
		label: 'Processed records',
		value: 41500,
		limit: 50000,
		hidePercentage: true,
	},
};

export const CustomThresholds: Story = {
	args: {
		label: 'Compute quota',
		value: 64,
		limit: 100,
		thresholds: { warning: 60, danger: 85 },
	},
};

export const Stacked: Story = {
	render: () => (
		<div className='space-y-4 w-[360px]'>
			<UsageBar label='Events' value={4800} limit={10000} />
			<UsageBar label='Seats' value={8} limit={10} />
			<UsageBar label='Storage' value={9.7} limit={10} formatValue={(n) => `${n.toFixed(1)} GB`} />
			<UsageBar label='Credits' value={250} limit={Infinity} />
		</div>
	),
};
