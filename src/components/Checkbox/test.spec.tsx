import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

	it('should dispatch onCheck when status changes', async () => {
		const onCheck = jest.fn()
		renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />)

		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByRole('checkbox'))
		// quando estiver mudando estados deve-se trabalhar com métodos assíncronos nos testes
		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})

		expect(onCheck).toHaveBeenCalledWith(true)
	})
	it('should dispatch onCheck when status changes', async () => {
		const onCheck = jest.fn()
		renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />)

		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByRole('checkbox'))
		// quando estiver mudando estados deve-se trabalhar com métodos assíncronos nos testes
		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})

		expect(onCheck).toHaveBeenCalledWith(false)
	})

	it('should be accessible with tab', () => {
		renderWithTheme(<Checkbox label="Checkbox label" labelFor="Checkbox" />)

		// espero que a página esteja em foco
		expect(document.body).toHaveFocus()
		// ao dar "tab", o foco vai para o input
		userEvent.tab()
		expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus()
	})
})
