import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Button from '@/components/atoms/Button/Button';
import PricingTierTable, { type PricingTier, type PricingFeatureRow } from './PricingTierTable';

const tiers: PricingTier[] = [
	{
		id: 'starter',
		name: 'Starter',
		description: 'For hobby projects and prototypes.',
		price: '$0 / mo',
		cta: (
			<Button variant='outline' size='sm'>
				Start free
			</Button>
		),
	},
	{
		id: 'growth',
		name: 'Growth',
		description: 'For growing businesses with real usage.',
		price: '$49 / mo',
		highlight: true,
		cta: <Button size='sm'>Choose Growth</Button>,
	},
	{
		id: 'scale',
		name: 'Scale',
		description: 'For high-volume workloads.',
		price: 'Custom',
		cta: (
			<Button variant='outline' size='sm'>
				Contact sales
			</Button>
		),
	},
];

const features: PricingFeatureRow[] = [
	{
		label: 'Events / month',
		values: { starter: '10k', growth: '1M', scale: 'Unlimited' },
	},
	{
		label: 'Projects',
		values: { starter: '1', growth: '10', scale: 'Unlimited' },
	},
	{
		label: 'Priority support',
		values: { starter: false, growth: true, scale: true },
	},
	{
		label: 'SLA',
		values: { starter: false, growth: false, scale: true },
	},
	{
		label: 'SSO',
		values: { starter: false, growth: true, scale: true },
	},
	{
		label: 'Custom contracts',
		values: { starter: false, growth: false, scale: true },
	},
];

/**
 * Side-by-side pricing tier comparison. Fully data-driven.
 */
const meta: Meta<typeof PricingTierTable> = {
	title: 'Organisms/PricingTierTable',
	component: PricingTierTable,
	tags: ['autodocs'],
	parameters: { layout: 'padded' },
	args: { tiers, features },
	decorators: [
		(Story) => (
			<div className='w-full max-w-4xl'>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof PricingTierTable>;

export const Default: Story = {};

export const NoRecommended: Story = {
	args: {
		tiers: tiers.map((t) => ({ ...t, highlight: false })),
		features,
	},
};

export const CompactFeatureList: Story = {
	args: {
		tiers,
		features: features.slice(0, 3),
	},
};

export const EmptyFeatures: Story = {
	args: {
		tiers,
		features: [],
	},
};

export const WithLongFeatureNames: Story = {
	args: {
		tiers,
		features: [
			{
				label: 'Guaranteed export retention period for compliance and finance audits',
				values: { starter: '7 days', growth: '90 days', scale: '365 days' },
			},
			...features.slice(0, 2),
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await expect(canvas.getByText(/recommended/i)).toBeInTheDocument();
	},
};
