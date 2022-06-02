import { screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'

import Slider from '.'

describe('<Slider />', () => {
	it('should render children as slider item', () => {
		renderWithTheme(
			<Slider settings={{ slidesToShow: 2 }}>
				<p>Item 1</p>
				<p>Item 1</p>
			</Slider>
		)

		expect
	})
})
