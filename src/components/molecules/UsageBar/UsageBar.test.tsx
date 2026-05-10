import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import UsageBar from './UsageBar';

describe('UsageBar', () => {
	it('renders label and formatted value / limit', () => {
		render(<UsageBar label='Events' value={250} limit={1000} />);
		expect(screen.getByText('Events')).toBeInTheDocument();
		expect(screen.getByText(/250 \/ 1,000/)).toBeInTheDocument();
		expect(screen.getByText(/\(25%\)/)).toBeInTheDocument();
	});

	it('clamps values above limit to 100%', () => {
		render(<UsageBar label='X' value={9999} limit={100} />);
		expect(screen.getByText(/\(100%\)/)).toBeInTheDocument();
	});

	it('shows "unlimited" when limit is omitted', () => {
		render(<UsageBar label='X' value={42} />);
		expect(screen.getByText(/unlimited/)).toBeInTheDocument();
	});

	it('shows "unlimited" when limit is Infinity', () => {
		render(<UsageBar label='X' value={42} limit={Infinity} />);
		expect(screen.getByText(/unlimited/)).toBeInTheDocument();
	});

	it('hides percentage when hidePercentage is set', () => {
		render(<UsageBar label='X' value={50} limit={100} hidePercentage />);
		expect(screen.queryByText(/\(50%\)/)).not.toBeInTheDocument();
	});
});
