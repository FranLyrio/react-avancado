import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
	it('should render the heading', () => {
		render(<Main />)

		const heading = screen.getByRole('heading', { name: /react avançado/i })

		expect(heading).toBeInTheDocument()
	})

	it('should render the colors correctly', () => {
		const { container } = render(<Main />)

		expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' })
	})
})
