import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDopdown />', () => {
	it('should render the username', () => {
		renderWithTheme(<UserDropdown username="username" />)

		expect(screen.getByText(/username/i)).toBeInTheDocument()
	})

	it('should render the menu', async () => {
		renderWithTheme(<UserDropdown username="username" />)

		userEvent.click(screen.getByText(/username/i))

		await waitFor(() => {
			expect(
				screen.getByRole('link', { name: /my profile/i })
			).toBeInTheDocument()
			expect(
				screen.getByRole('link', { name: /wishlist/i })
			).toBeInTheDocument()
			expect(screen.getByRole('link', { name: /sign ou/i })).toBeInTheDocument()
		})
	})
})
