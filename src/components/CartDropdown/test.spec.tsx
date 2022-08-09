import { renderWithTheme } from 'utils/tests/helpers'

import items from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
	it('should render the heading', () => {
		renderWithTheme(<CartDropdown items={items} total="R$ 330,00" />)
	})
})
