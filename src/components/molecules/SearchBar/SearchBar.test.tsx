import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
	it('renders with a placeholder', () => {
		render(<SearchBar onSearch={vi.fn()} placeholder='Find anything' />);
		expect(screen.getByPlaceholderText('Find anything')).toBeInTheDocument();
	});

	it('debounces onSearch with the latest value', async () => {
		const onSearch = vi.fn();
		render(<SearchBar onSearch={onSearch} debounceMs={50} />);
		const input = screen.getByRole('searchbox');
		fireEvent.change(input, { target: { value: 'abc' } });
		await waitFor(() => expect(onSearch).toHaveBeenLastCalledWith('abc'), { timeout: 500 });
	});

	it('shows a clear button when there is a value and clears on click', async () => {
		const onSearch = vi.fn();
		render(<SearchBar onSearch={onSearch} debounceMs={10} />);
		const input = screen.getByRole('searchbox');
		fireEvent.change(input, { target: { value: 'abc' } });
		const clear = await screen.findByRole('button', { name: /clear search/i });
		fireEvent.click(clear);
		await waitFor(() => expect(onSearch).toHaveBeenLastCalledWith(''), { timeout: 500 });
	});
});
