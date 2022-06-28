import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from './mock'

import GameDetails, { GameDetailsProps } from '.'

const props = mock as GameDetailsProps

describe('<GameDetails />', () => {
	it('should render the blocks', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(
			screen.getByRole('heading', { name: /developer/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /release date/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /platforms/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /publisher/i })
		).toBeInTheDocument()

		expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

		expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
	})

	it('should render platform icons', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
		expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
		expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
	})

	it('should render free rating when BR0', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/free/i))
	})

	it('should render the publisher', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/walkabout/i))
	})

	it('should render the developer', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/different tales/i))
	})

	it('should render 18+ rating when BR18', () => {
		renderWithTheme(<GameDetails {...props} rating="BR18" />)

		expect(screen.getByText(/18\+/i))
	})

	it('should render formatted date', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
	})

	it('should render a list of genres', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
	})
})
