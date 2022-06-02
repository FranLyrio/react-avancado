import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

export const parameters = {
	backgrounds: {
		default: 'won-light',
		values: [
			{
				name: 'won-light',
				value: theme.colors.white
			},
			{
				name: 'won-dark',
				value: theme.colors.mainBg
			}
		]
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyle removeBg />
			<Story />
		</ThemeProvider>
	)
];
