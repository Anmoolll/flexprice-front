import type { Preview } from '@storybook/react';

// Pull in the real app stylesheet so Tailwind tokens, CSS vars, and fonts
// render identically to production.
import '../src/index.css';

const preview: Preview = {
	parameters: {
		layout: 'centered',
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'app',
			values: [
				{ name: 'app', value: '#f8fafc' },
				{ name: 'white', value: '#ffffff' },
				{ name: 'dark', value: '#0a0a0a' },
			],
		},
		options: {
			storySort: {
				order: [
					'Introduction',
					'Atoms',
					'Molecules',
					'Organisms',
					'Patterns',
					'Hooks',
					'Utilities',
				],
			},
		},
	},
	decorators: [
		// Keep this decorator minimal so per-story `parameters.layout`
		// (centered / padded / fullscreen) drives spacing. We only ensure
		// the app font + foreground color are applied.
		(Story) => (
			<div className='font-inter text-foreground'>
				<Story />
			</div>
		),
	],
};

export default preview;
