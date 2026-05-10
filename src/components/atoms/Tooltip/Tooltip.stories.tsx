import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Info } from 'lucide-react';
import Button from '../Button/Button';
import Tooltip from './Tooltip';

/**
 * `Tooltip` is a thin, styled wrapper around Radix Tooltip with Flexprice
 * defaults (sideOffset, typography, subtle shadow). Use for short hints —
 * never as the only way to convey critical information (a11y).
 */
const meta: Meta<typeof Tooltip> = {
	title: 'Atoms/Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	argTypes: {
		side: { control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] },
		align: { control: 'inline-radio', options: ['start', 'center', 'end'] },
	},
	args: {
		content: 'Usage includes all metered events from the last 30 days.',
		side: 'top',
		align: 'center',
		children: (
			<Button variant='outline' size='sm'>
				<Info size={14} /> Hover me
			</Button>
		),
	},
	decorators: [
		(Story) => (
			<div className='p-16'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /hover me/i });
		await userEvent.hover(trigger);
		await expect(await within(document.body).findByText(/usage includes all metered events/i)).toBeInTheDocument();
	},
};

export const BottomPlacement: Story = { args: { side: 'bottom' } };

export const RichContent: Story = {
	args: {
		content: (
			<div className='max-w-xs space-y-1'>
				<p className='font-medium'>What is MTR?</p>
				<p className='text-xs text-muted-foreground'>Monthly Tracked Revenue — the normalized MRR across all active subscriptions.</p>
			</div>
		),
	},
};
