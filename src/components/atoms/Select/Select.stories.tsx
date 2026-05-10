import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import Select, { type SelectOption } from './Select';

const PLAN_OPTIONS: SelectOption[] = [
	{ value: 'starter', label: 'Starter', description: '10k events / month, one project' },
	{ value: 'growth', label: 'Growth', description: '100k events, unlimited projects' },
	{ value: 'scale', label: 'Scale', description: 'Volume pricing, priority support' },
	{ value: 'enterprise', label: 'Enterprise', description: 'Custom SLA', disabled: true },
];

/**
 * `Select` is the Flexprice dropdown primitive. It wraps Radix Select with
 * label, description, error, optional radio-style items, and per-option
 * prefix/suffix icons & descriptions.
 */
const meta: Meta<typeof Select> = {
	title: 'Atoms/Select',
	component: Select,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	args: {
		options: PLAN_OPTIONS,
		label: 'Plan',
		placeholder: 'Select a plan',
	},
	decorators: [
		(Story) => (
			<div style={{ width: 320 }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Select>;

const Controlled: Story['render'] = (args) => {
	const [value, setValue] = useState('');
	return <Select {...args} value={value} onChange={setValue} />;
};

/** Baseline select with a label and placeholder. */
export const Default: Story = {
	render: Controlled,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');
		await userEvent.click(trigger);
		const option = await within(document.body).findByText('Growth');
		await userEvent.click(option);
		await expect(trigger).toHaveTextContent('Growth');
	},
};

/** Required field with a description. */
export const WithDescription: Story = {
	render: Controlled,
	args: {
		required: true,
		description: 'You can change this later in Billing → Plans.',
	},
};

/** Error state. */
export const WithError: Story = {
	render: Controlled,
	args: { error: 'A plan is required to continue.' },
};

/** Radio-style items (single-choice with a radio indicator). */
export const RadioStyle: Story = {
	render: Controlled,
	args: { isRadio: true },
};

/** Disabled select. */
export const Disabled: Story = {
	render: Controlled,
	args: { disabled: true },
};

/** Empty state — custom copy when there are no options. */
export const Empty: Story = {
	render: Controlled,
	args: { options: [], noOptionsText: 'No plans are available in this region.' },
};
