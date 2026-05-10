import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		// 'tag' = each story must opt in via `tags: ['autodocs']` in its meta.
		// We rely on this so every authored story is intentional and documented.
		autodocs: 'tag',
		defaultName: 'Docs',
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
	staticDirs: ['../public', '../assets'],
	// Kept explicit (instead of relying on vite.config.ts inheritance) because
	// Storybook on Windows occasionally drops the alias when paths contain
	// spaces. Safer to declare once here.
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: {
					'@': path.resolve(__dirname, '../src'),
				},
			},
		});
	},
};

export default config;
