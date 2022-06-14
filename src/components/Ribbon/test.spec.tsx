import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Ribbon from '.'

describe('<Ribbon />', () => {
	it('should render the text correctly', () => {
		renderWithTheme(<Ribbon>Best seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toBeInTheDocument()
	})

	it('should render with the primary color', () => {
		renderWithTheme(<Ribbon>Best seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			'background-color': '#f231a5'
		})
	})

	it('should render with the secondary color', () => {
		renderWithTheme(<Ribbon color="secondary">Best seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			'background-color': '#3cd3c1'
		})
	})

	it('should render with the normal size as default', () => {
		renderWithTheme(<Ribbon>Best seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			height: '3.6rem',
			'font-size': '1.4rem'
		})
	})

	it('should render with the small size', () => {
		renderWithTheme(<Ribbon size="small">Best seller</Ribbon>)

		expect(screen.getByText(/best seller/i)).toHaveStyle({
			height: '2.6rem',
			'font-size': '1.2rem'
		})
	})
})
