import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
	it('should render the heading', () => {
		const { container } = render(<Menu />)

		const heading = screen.getByRole('heading', { name: /Menu/i })

		expect(heading).toBeInTheDocument()
	})
})
