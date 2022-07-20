import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Cart from '.'

describe('<Cart />', () => {
	it('should render without badge', () => {
		renderWithTheme(<Cart />)

		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
		expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
	})

	it('should render with badge', () => {
		renderWithTheme(<Cart itemsQuantity={2} />)

		expect(screen.queryByLabelText(/cart items/i)).toHaveTextContent(/2/)
	})

	it('should not render with badge if has negative numbers', () => {
		renderWithTheme(<Cart itemsQuantity={-1} />)

		expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
	})
})
