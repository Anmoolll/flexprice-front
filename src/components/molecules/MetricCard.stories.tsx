import type { Meta, StoryObj } from '@storybook/react';
import MetricCard from './MetricCard';

/**
 * `MetricCard` is the dashboard KPI primitive. It formats a numeric value
 * with an optional currency symbol or percent suffix, and can show an
 * up/down trend indicator.
 */
const meta: Meta<typeof MetricCard> = {
	title: 'Molecules/MetricCard',
	component: MetricCard,
	tags: ['autodocs'],
	parameters: { layout: 'padded' },
	args: {
		title: 'Monthly Recurring Revenue',
		value: 128450.5,
		currency: 'USD',
	},
	decorators: [
		(Story) => (
			<div className='w-[320px]'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {};

export const WithTrendUp: Story = {
	args: { showChangeIndicator: true, isNegative: false },
};

export const WithTrendDown: Story = {
	args: { showChangeIndicator: true, isNegative: true, value: 82300 },
};

export const PercentValue: Story = {
	args: {
		title: 'Churn rate',
		value: 2.4,
		isPercent: true,
		currency: undefined,
		showChangeIndicator: true,
		isNegative: true,
	},
};

export const PlainNumber: Story = {
	args: {
		title: 'Active subscriptions',
		value: 1248,
		currency: undefined,
	},
};

export const ZeroState: Story = {
	args: {
		title: 'New revenue this cycle',
		value: 0,
		currency: 'USD',
		showChangeIndicator: false,
	},
};

export const GridExample: Story = {
	parameters: { layout: 'padded' },
	decorators: [
		(Story) => (
			<div className='w-full max-w-4xl'>
				<Story />
			</div>
		),
	],
	render: () => (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
			<MetricCard title='MRR' value={128450} currency='USD' showChangeIndicator />
			<MetricCard title='Active customers' value={1248} showChangeIndicator />
			<MetricCard title='Churn rate' value={2.4} isPercent showChangeIndicator isNegative />
			<MetricCard title='Invoices overdue' value={23} showChangeIndicator isNegative />
		</div>
	),
};
