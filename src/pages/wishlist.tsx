import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishListPage(props: WishlistTemplateProps) {
	return <Wishlist {...props} />
}

export async function getStaticProps() {
	return {
		props: {
			games: gamesMock,
			recommendedGames: gamesMock,
			recommendedHighLight: highlightMock
		}
	}
}
