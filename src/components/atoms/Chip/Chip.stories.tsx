import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';
import Chip from './Chip';

/**
 * `Chip` is a compact, semantic status pill used throughout Flexprice
 * (e.g. invoice statuses, plan cadence, integration health). It supports
 * five semantic variants and a custom color override.
 */
const meta: Meta<typeof Chip> = {
	title: 'Atoms/Chip',
	component: Chip,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	argTypes: {
		variant: {
			control: 'inline-radio',
			options: ['default', 'success', 'warning', 'failed', 'info'],
		},
		disabled: { control: 'boolean' },
		onClick: { action: 'clicked' },
	},
	args: {
		label: 'Active',
		variant: 'success',
	},
};

export default meta;
type Story = StoryObj<typeof Chip>;

/** Baseline chip. */
export const Default: Story = {};

/** Every semantic variant side-by-side. */
export const Variants: Story = {
	parameters: { layout: 'padded' },
	render: () => (
		<div className='flex flex-wrap gap-2'>
			<Chip variant='default' label='Default' />
			<Chip variant='success' label='Paid' icon={<CheckCircle2 size={14} />} />
			<Chip variant='warning' label='Pending' icon={<AlertTriangle size={14} />} />
			<Chip variant='failed' label='Overdue' icon={<XCircle size={14} />} />
			<Chip variant='info' label='Draft' icon={<Info size={14} />} />
		</div>
	),
};

/** Clickable chip with keyboard support (Enter/Space). */
export const Clickable: Story = {
	args: {
		label: 'Click me',
		variant: 'info',
		onClick: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const chip = canvas.getByRole('button');
		await userEvent.click(chip);
		await expect(args.onClick).toHaveBeenCalledTimes(1);
	},
};

/** Disabled chip — neither clickable nor keyboard-focusable. */
export const Disabled: Story = {
	args: {
		label: 'Inactive',
		variant: 'default',
		disabled: true,
		onClick: fn(),
	},
};

/** Chip with custom color tokens (overrides variant). */
export const CustomColor: Story = {
	args: {
		label: 'Custom',
		bgColor: '#EEF2FF',
		textColor: '#4F46E5',
		borderColor: '#C7D2FE',
	},
};
