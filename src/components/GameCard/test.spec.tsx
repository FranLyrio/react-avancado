import { getByText, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import GameCard from '.'

const props = {
	title: 'Population Zero',
	developer: 'Rockstar Games',
	img: 'https://source.unsplash.com/user/willianjusten/300x140',
	price: 'R$ 235,00'
}

describe('<GameCard />', () => {
	it('should render correctly', () => {
		renderWithTheme(<GameCard {...props} />)

		const title = screen.getByRole('heading', { name: props.title })
		expect(title).toBeInTheDocument()

		const developer = screen.getByRole('heading', { name: props.developer })
		expect(developer).toBeInTheDocument()

		const image = screen.getByRole('img', { name: props.title })
		expect(image).toHaveAttribute('src', props.img)

		const wishlistButton = screen.getByLabelText(/add to wishlist/i)
		expect(wishlistButton).toBeInTheDocument()
	})

	it('should render price in label', () => {
		renderWithTheme(<GameCard {...props} />)

		const price = screen.getByText('R$ 235,00')
		expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
		expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
	})

	it('should render a line-through in price when promotional', () => {
		renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...props} />)

		const price = screen.getByText('R$ 235,00')
		expect(price).toHaveStyle({ textDecoration: 'line-through' })

		const promotionalPrice = screen.getByText('R$ 200,00')
		expect(promotionalPrice).not.toHaveStyle({ textDecoration: 'line-through' })
		expect(promotionalPrice).toHaveStyle({ backgroundColor: '#3CD3C1' })
	})
})
