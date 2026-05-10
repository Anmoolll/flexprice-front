import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import Input from './Input';

/**
 * The `Input` atom is the primary text / numeric entry control of the
 * Flexprice UI. It supports label / description / error states, optional
 * prefix & suffix slots, and several number-formatting variants.
 */
const meta: Meta<typeof Input> = {
	title: 'Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: 'inline-radio',
			options: ['text', 'number', 'integer', 'formatted-number'],
		},
		size: {
			control: 'inline-radio',
			// SizeVariant = 'xs' | 'sm' | 'default' | 'lg' | 'icon'. 'icon' is
			// irrelevant for text inputs, so it's omitted from the showcase.
			options: ['xs', 'sm', 'default', 'lg'],
		},
		disabled: { control: 'boolean' },
	},
	args: {
		label: 'Email',
		placeholder: 'you@flexprice.io',
		type: 'email',
		onChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

/** Baseline text input with a label. */
export const Default: Story = {
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');
		await userEvent.type(input, 'hello@flexprice.io');
		await expect(args.onChange).toHaveBeenCalled();
	},
};

/** Description text rendered below the field for hints. */
export const WithDescription: Story = {
	args: {
		description: 'We only use this to send billing receipts.',
	},
};

/** Error state — border turns destructive and the message is announced. */
export const WithError: Story = {
	args: {
		label: 'Password',
		type: 'password',
		placeholder: '••••••••',
		error: 'Password must be at least 8 characters',
	},
};

/** Non-interactive, muted style for read-only contexts. */
export const Disabled: Story = {
	args: {
		label: 'Customer ID',
		value: 'cus_01HXAB…',
		disabled: true,
	},
};

/** Prefix + suffix slots — useful for currency or unit hints. */
export const WithAffixes: Story = {
	args: {
		label: 'Price',
		placeholder: '0.00',
		inputPrefix: <span className='text-muted-foreground'>$</span>,
		suffix: 'USD',
	},
};

/** Formatted-number variant with thousand separators (controlled internally). */
export const FormattedNumber: Story = {
	render: (args) => {
		const [value, setValue] = useState('1234567');
		return <Input {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: 'Amount',
		variant: 'formatted-number',
		inputPrefix: <span className='text-muted-foreground'>$</span>,
	},
	parameters: {
		// The story renders with local state; disable the `value` control so
		// the Controls panel doesn't imply it’s wired through.
		controls: { exclude: ['value', 'onChange'] },
	},
};
