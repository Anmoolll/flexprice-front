import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Plus, ArrowRight, Trash2 } from 'lucide-react';
import Button from './Button';
import AddButton from './AddButton';

/**
 * The `Button` atom is the primary action element of the Flexprice UI.
 * It supports variants (default/black/destructive/outline/secondary/ghost/link),
 * sizes (xs/sm/default/lg/icon), an isLoading state, and prefix/suffix icon slots.
 */
const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: { layout: 'centered' },
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'black', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
		},
		size: {
			control: 'inline-radio',
			options: ['xs', 'sm', 'default', 'lg', 'icon'],
		},
		isLoading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		onClick: { action: 'clicked' },
	},
	args: {
		children: 'Create subscription',
		variant: 'default',
		size: 'default',
		onClick: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

/** Baseline primary action. */
export const Default: Story = {
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		await userEvent.click(button);
		await expect(args.onClick).toHaveBeenCalledTimes(1);
	},
};

/** All variant tokens side-by-side — useful for design review. */
export const Variants: Story = {
	parameters: { layout: 'padded' },
	render: (args) => (
		<div className='flex flex-wrap gap-3'>
			<Button {...args} variant='default'>
				Default
			</Button>
			<Button {...args} variant='black'>
				Black
			</Button>
			<Button {...args} variant='destructive'>
				Destructive
			</Button>
			<Button {...args} variant='outline'>
				Outline
			</Button>
			<Button {...args} variant='secondary'>
				Secondary
			</Button>
			<Button {...args} variant='ghost'>
				Ghost
			</Button>
			<Button {...args} variant='link'>
				Link
			</Button>
		</div>
	),
};

/** Size ramp from xs to lg. */
export const Sizes: Story = {
	parameters: { layout: 'padded' },
	render: (args) => (
		<div className='flex items-center gap-3'>
			<Button {...args} size='xs'>
				Extra small
			</Button>
			<Button {...args} size='sm'>
				Small
			</Button>
			<Button {...args} size='default'>
				Default
			</Button>
			<Button {...args} size='lg'>
				Large
			</Button>
		</div>
	),
};

/** Button with prefix + suffix icon slots. */
export const WithIcons: Story = {
	args: {
		prefixIcon: <Plus />,
		suffixIcon: <ArrowRight />,
		children: 'Continue',
	},
};

/** Loading state — spinner replaces contents; button is disabled. */
export const Loading: Story = {
	args: { isLoading: true, children: 'Saving…' },
};

/** Non-interactive disabled state. */
export const Disabled: Story = {
	args: { disabled: true },
};

/** Destructive action — use sparingly. */
export const Destructive: Story = {
	args: {
		variant: 'destructive',
		prefixIcon: <Trash2 />,
		children: 'Delete customer',
	},
};

/** Convenience wrapper: `<AddButton />` pre-fills a plus icon. */
export const AsAddButton: Story = {
	render: (args) => <AddButton {...args} label='Add plan' />,
};
