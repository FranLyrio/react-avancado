import '@testing-library/jest-dom'

import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
	it('should render the heading', () => {
		renderWithTheme(<Menu />)
		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
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
})
