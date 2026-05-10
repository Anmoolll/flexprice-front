import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import InvoiceStatusBadge, { type InvoiceStatus } from './InvoiceStatusBadge';

describe('InvoiceStatusBadge', () => {
	const cases: Array<[InvoiceStatus, string]> = [
		['DRAFT', 'Draft'],
		['FINALIZED', 'Finalized'],
		['PENDING', 'Pending'],
		['PAID', 'Paid'],
		['OVERDUE', 'Overdue'],
		['FAILED', 'Failed'],
		['VOIDED', 'Voided'],
		['SKIPPED', 'Skipped'],
	];

	it.each(cases)('renders label for %s', (status, label) => {
		render(<InvoiceStatusBadge status={status} />);
		expect(screen.getByText(label)).toBeInTheDocument();
	});

	it('accepts lowercase input', () => {
		render(<InvoiceStatusBadge status={'paid' as Lowercase<InvoiceStatus>} />);
		expect(screen.getByText('Paid')).toBeInTheDocument();
	});

	it('falls back to Draft for unknown statuses', () => {
		// @ts-expect-error — intentionally invalid input
		render(<InvoiceStatusBadge status='MYSTERY' />);
		expect(screen.getByText('Draft')).toBeInTheDocument();
	});
});
