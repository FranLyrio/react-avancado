module.exports = {
	stories: [
		'../src/components/**/stories.mdx',
		'../src/**/*stories.@(js|jsx|ts|tsx)'
	],
	addons: ['@storybook/addon-essentials'],
	framework: '@storybook/react'
};
