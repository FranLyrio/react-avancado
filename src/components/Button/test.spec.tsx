import { screen } from '@testing-library/react'
import { BsCartPlus } from 'react-icons/bs'

import { renderWithTheme } from '../../utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
	it('should render the medium size by default', () => {
		renderWithTheme(<Button>Buy now</Button>)

		const button = screen.getByRole('button', { name: /Buy now/i })
		expect(button).toHaveStyle({
			height: '4rem',
			padding: '0.8rem 3.2rem',
			'font-size': '1.4rem'
		})
	})

	it('should render the small size', () => {
		renderWithTheme(<Button size="small">Buy now</Button>)

		const button = screen.getByRole('button', { name: /Buy now/i })
		expect(button).toHaveStyle({
			height: '3rem',
			'font-size': '1.2rem'
		})
	})

	it('should render the large size', () => {
		renderWithTheme(<Button size="large">Buy now</Button>)

		const button = screen.getByRole('button', { name: /Buy now/i })
		expect(button).toHaveStyle({
			height: '5rem',
			padding: '0.8rem 4.8rem',
			'font-size': '1.6rem'
		})
	})

	it('should render a full width version', () => {
		renderWithTheme(<Button fullWidth>Buy now</Button>)

		const button = screen.getByRole('button', { name: /Buy now/i })
		expect(button).toHaveStyle({
			width: '100%'
		})
	})

	it('should render an icon version', () => {
		renderWithTheme(
			<Button icon={<BsCartPlus data-testid="icon" />}>Buy now</Button>
		)

		const button = screen.getByText(/Buy now/i)
		const icon = screen.getByTestId('icon')
		expect(button).toBeInTheDocument()
		expect(icon).toBeInTheDocument()
	})

	it('should render Button as a link', () => {
		renderWithTheme(
			<Button as="a" href="/link">
				Navigate
			</Button>
		)

		expect(screen.getByRole('link', { name: /navigate/i })).toHaveAttribute(
			'href',
			'/link'
		)
	})
})
