import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Button from './Button';
import AddButton from './AddButton';

describe('Button', () => {
	it('renders children', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
	});

	it('calls onClick when clicked', () => {
		const onClick = vi.fn();
		render(<Button onClick={onClick}>Click</Button>);
		fireEvent.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('is disabled when isLoading is true', () => {
		render(<Button isLoading>Submit</Button>);
		expect(screen.getByRole('button')).toBeDisabled();
	});

	it('does not fire onClick when disabled', () => {
		const onClick = vi.fn();
		render(
			<Button onClick={onClick} disabled>
				Click
			</Button>,
		);
		fireEvent.click(screen.getByRole('button'));
		expect(onClick).not.toHaveBeenCalled();
	});

	it('renders prefix and suffix content', () => {
		render(
			<Button prefixIcon={<span data-testid='pre'>pre</span>} suffixIcon={<span data-testid='suf'>suf</span>}>
				Label
			</Button>,
		);
		expect(screen.getByTestId('pre')).toBeInTheDocument();
		expect(screen.getByTestId('suf')).toBeInTheDocument();
	});

	it('hides prefix/suffix content while loading', () => {
		render(
			<Button isLoading prefixIcon={<span data-testid='pre'>pre</span>}>
				Label
			</Button>,
		);
		expect(screen.queryByTestId('pre')).not.toBeInTheDocument();
	});

	it('applies destructive variant class', () => {
		render(<Button variant='destructive'>Danger</Button>);
		expect(screen.getByRole('button').className).toMatch(/destructive/);
	});
});

describe('AddButton', () => {
	it('renders with default "Add" label', () => {
		render(<AddButton />);
		expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
	});

	it('uses custom label prop', () => {
		render(<AddButton label='Add customer' />);
		expect(screen.getByRole('button', { name: /add customer/i })).toBeInTheDocument();
	});
});
