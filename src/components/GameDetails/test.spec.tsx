import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from '.'

describe('<GameDetails />', () => {
	it('should render the heading', () => {
		renderWithTheme(<GameDetails />)

		const heading = screen.getByRole('heading', { name: /GameDetails/i })

		expect(heading).toBeInTheDocument()
	})
})
