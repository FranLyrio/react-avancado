import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
	it('should render with label', () => {
		renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

		// pega o elemento relacionado à label
		expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
		// pega a label de fato
		expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
	})

	it('should render without label', () => {
		renderWithTheme(<Checkbox />)

		expect(screen.queryByLabelText(/checkbox/i)).not.toBeInTheDocument()
	})

	it('should render with black label', () => {
		renderWithTheme(
			<Checkbox label="checkbox label" labelFor="checkbox" labelColor="black" />
		)

		expect(screen.getByText(/checkbox label/i)).toHaveStyle({
			color: '#030517'
		})
	})
})
