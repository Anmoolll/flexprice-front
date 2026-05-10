import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Chip from './Chip';

describe('Chip', () => {
	it('renders the label', () => {
		render(<Chip label='Paid' />);
		expect(screen.getByText('Paid')).toBeInTheDocument();
	});

	it('renders icon when provided', () => {
		render(<Chip label='X' icon={<span data-testid='icon'>!</span>} />);
		expect(screen.getByTestId('icon')).toBeInTheDocument();
	});

	it('fires onClick when clicked', () => {
		const onClick = vi.fn();
		render(<Chip label='X' onClick={onClick} />);
		fireEvent.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('fires onClick on Enter key', () => {
		const onClick = vi.fn();
		render(<Chip label='X' onClick={onClick} />);
		fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
		expect(onClick).toHaveBeenCalled();
	});

	it('fires onClick on Space key', () => {
		const onClick = vi.fn();
		render(<Chip label='X' onClick={onClick} />);
		fireEvent.keyDown(screen.getByRole('button'), { key: ' ' });
		expect(onClick).toHaveBeenCalled();
	});

	it('does not fire onClick when disabled', () => {
		const onClick = vi.fn();
		render(<Chip label='X' onClick={onClick} disabled />);
		fireEvent.click(screen.getByRole('button'));
		expect(onClick).not.toHaveBeenCalled();
	});

	it('applies custom color overrides inline', () => {
		render(<Chip label='X' bgColor='rgb(1, 2, 3)' textColor='rgb(4, 5, 6)' />);
		const el = screen.getByText('X').parentElement!;
		expect(el.style.backgroundColor).toBe('rgb(1, 2, 3)');
		expect(el.style.color).toBe('rgb(4, 5, 6)');
	});

	it('is aria-disabled when disabled', () => {
		render(<Chip label='X' onClick={vi.fn()} disabled />);
		const el = screen.getByRole('button');
		expect(el).toHaveAttribute('aria-disabled', 'true');
	});
});
