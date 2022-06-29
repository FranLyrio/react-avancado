import Base from 'templates/Base'

import Heading from 'components/Heading'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type WishlistTemplateProps = {
	recommendedGames: GameCardProps[]
	recommendedHighLight: HighlightProps
}

const Wishlist = ({
	recommendedGames,
	recommendedHighLight
}: WishlistTemplateProps) => (
	<Base>
		<Container>
			<Heading lineLeft lineColor="secondary">
				Wishlist
			</Heading>
		</Container>
	</Base>
)

export default Wishlist
