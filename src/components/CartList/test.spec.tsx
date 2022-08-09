import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockItems from './mock'

import CartList from '.'

jest.mock('components/GameItem', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock GameItem"></div>
		}
	}
})

describe('<CartList />', () => {
	it('should render the cart list', () => {
		renderWithTheme(<CartList items={mockItems} total="R$ 330,00" />)
		expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
		expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#f231a5' })
	})

	it('should render the button', () => {
		renderWithTheme(<CartList items={mockItems} total="R$ 330,00" hasButton />)

		expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
	})

	it('should render empty if there are no games', () => {
		renderWithTheme(<CartList />)

		expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
	})
})
