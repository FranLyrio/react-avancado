import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
	it('should render the heading', () => {
		renderWithTheme(<Menu />)
		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
		expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
		expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
	})

	it('should handle the open/close mobile menu', () => {
		renderWithTheme(<Menu />)
		// selecionar o MenuFull
		const fullMenuElement = screen.getByRole('navigation', { hidden: true })

		// verificar se o menu tá escondido
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
		expect(fullMenuElement).toHaveStyle({ opacity: 0 })

		// clicar no botão de abrir o menu e verificar se ele abriu
		fireEvent.click(screen.getByLabelText(/open menu/i))
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
		expect(fullMenuElement).toHaveStyle({ opacity: 1 })

		// clicar no botão de fechar o menu e verificar se ele fechou
		fireEvent.click(screen.getByLabelText(/close menu/i))
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
		expect(fullMenuElement).toHaveStyle({ opacity: 0 })
	})

	it('should show register box when logged out', () => {
		renderWithTheme(<Menu />)

		expect(screen.getByText(/sign up/i)).toBeInTheDocument()
		expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
	})

	it('should show wishlist and account when logged in', () => {
		renderWithTheme(<Menu username="Fran" />)

		expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()

		userEvent.click(screen.getByText(/Fran/i))

		waitFor(() => {
			expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
			expect(screen.getByText(/my profile/i)).toBeInTheDocument()
		})

		expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
		expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
	})
})
