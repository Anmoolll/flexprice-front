import type { Meta, StoryObj } from '@storybook/react';
import InvoiceStatusBadge, { type InvoiceStatus } from './InvoiceStatusBadge';

const ALL_STATUSES: InvoiceStatus[] = ['DRAFT', 'FINALIZED', 'PENDING', 'PAID', 'OVERDUE', 'FAILED', 'VOIDED', 'SKIPPED'];

/**
 * `InvoiceStatusBadge` maps the canonical invoice lifecycle statuses to a
 * consistent color + icon + label via the `Chip` atom.
 */
const meta: Meta<typeof InvoiceStatusBadge> = {
	title: 'Molecules/InvoiceStatusBadge',
	component: InvoiceStatusBadge,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	argTypes: {
		status: { control: 'select', options: ALL_STATUSES },
		hideIcon: { control: 'boolean' },
	},
	args: { status: 'PAID' },
};

export default meta;
type Story = StoryObj<typeof InvoiceStatusBadge>;

export const Default: Story = {};

export const AllStatuses: Story = {
	parameters: { layout: 'padded' },
	render: () => (
		<div className='flex flex-wrap gap-2'>
			{ALL_STATUSES.map((s) => (
				<InvoiceStatusBadge key={s} status={s} />
			))}
		</div>
	),
};

export const WithoutIcons: Story = {
	parameters: { layout: 'padded' },
	render: () => (
		<div className='flex flex-wrap gap-2'>
			{ALL_STATUSES.map((s) => (
				<InvoiceStatusBadge key={s} status={s} hideIcon />
			))}
		</div>
	),
};

/** Lowercase input is normalised — useful when consuming raw backend payloads. */
export const LowercaseInput: Story = {
	args: { status: 'paid' },
};
