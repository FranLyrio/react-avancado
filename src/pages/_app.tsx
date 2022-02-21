import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>React Avançado - Boilerplate</title>
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="appe-touch-icon" href="/img/icon-512.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
