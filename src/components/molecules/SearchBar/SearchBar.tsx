import { FC, useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Input from '@/components/atoms/Input';

interface SearchBarProps {
	/** Current committed query (controlled) or initial value (uncontrolled). */
	value?: string;
	/** Fired after the debounce window elapses with the latest value. */
	onSearch: (value: string) => void;
	/** Debounce delay in ms. Default 300ms. */
	debounceMs?: number;
	/** Placeholder text. */
	placeholder?: string;
	/** Optional visible label above the input. */
	label?: string;
	/** Accessible label for screen readers when `label` is not rendered. */
	ariaLabel?: string;
	/** Disable the control. */
	disabled?: boolean;
	/** Additional wrapper classes. */
	className?: string;
}

/**
 * `SearchBar` wraps the Input atom with a search icon, clear button, and
 * debounce so consumers don’t fire a query on every keystroke.
 *
 * - **Controlled**: pass `value` and react to `onSearch` to drive it externally.
 * - **Uncontrolled**: omit `value`; the bar manages its own state.
 */
const SearchBar: FC<SearchBarProps> = ({
	value,
	onSearch,
	debounceMs = 300,
	placeholder = 'Search…',
	label,
	ariaLabel = 'Search',
	disabled,
	className,
}) => {
	const isControlled = value !== undefined;
	const [internal, setInternal] = useState(value ?? '');
	const current = isControlled ? value! : internal;

	useEffect(() => {
		const id = window.setTimeout(() => onSearch(current), debounceMs);
		return () => window.clearTimeout(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current, debounceMs]);

	const handleChange = (next: string) => {
		if (!isControlled) setInternal(next);
		else onSearch(next);
	};

	const handleClear = () => handleChange('');

	return (
		<div className={cn('w-full', className)}>
			<Input
				aria-label={ariaLabel}
				role='searchbox'
				label={label}
				value={current}
				onChange={handleChange}
				placeholder={placeholder}
				disabled={disabled}
				inputPrefix={<Search size={16} className='text-muted-foreground' />}
				suffix={
					current ? (
						<button
							type='button'
							onClick={handleClear}
							aria-label='Clear search'
							className='text-muted-foreground hover:text-foreground transition-colors'>
							<X size={14} />
						</button>
					) : null
				}
			/>
		</div>
	);
};

export default SearchBar;
