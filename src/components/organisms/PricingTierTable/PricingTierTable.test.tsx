import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PricingTierTable, { type PricingFeatureRow, type PricingTier } from './PricingTierTable';

const tiers: PricingTier[] = [
	{ id: 'starter', name: 'Starter', price: '$0', description: 'Entry tier' },
	{ id: 'growth', name: 'Growth', price: '$49', highlight: true },
];

const features: PricingFeatureRow[] = [
	{
		label: 'Priority support',
		values: { starter: false, growth: true },
	},
	{
		label: 'Projects',
		values: { starter: '1', growth: 'Unlimited' },
	},
];

describe('PricingTierTable', () => {
	it('renders tier headers and feature rows', () => {
		render(<PricingTierTable tiers={tiers} features={features} />);

		expect(screen.getByRole('columnheader', { name: /starter/i })).toBeInTheDocument();
		expect(screen.getByRole('columnheader', { name: /growth/i })).toBeInTheDocument();
		expect(screen.getByRole('rowheader', { name: /priority support/i })).toBeInTheDocument();
		expect(screen.getByText('Unlimited')).toBeInTheDocument();
	});

	it('shows recommended badge for highlighted tier', () => {
		render(<PricingTierTable tiers={tiers} features={features} />);
		expect(screen.getByText(/recommended/i)).toBeInTheDocument();
	});
});
