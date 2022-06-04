import { GameCardProps } from '../../components/GameCard'
import { BannerProps } from '../../components/Banner'
import { HighlightProps } from '../../components/Highlight'

import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import BannerSlider from '../../components/BannerSlider'
import GameCardSlider from '../../components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
	banners: BannerProps[]
	newGames: GameCardProps[]
	mostPopularHighlight: HighlightProps
	mostPopularGames: GameCardProps[]
	upcomingGames: GameCardProps[]
	upcomingHighligth: HighlightProps
	upcomingMoreGames: GameCardProps[]
	freeGames: GameCardProps[]
	freeHighligth: HighlightProps
}

const Home = ({
	banners,
	freeGames,
	freeHighligth,
	mostPopularGames,
	mostPopularHighlight,
	newGames,
	upcomingGames,
	upcomingHighligth,
	upcomingMoreGames
}: HomeTemplateProps) => (
	<section>
		<Container>
			<Menu />
			<BannerSlider items={banners} />
		</Container>

		<Container>
			<Heading lineLeft lineColor="secondary" color="black">
				News
			</Heading>

			<GameCardSlider items={newGames} />
		</Container>

		<Container>
			<Heading lineLeft lineColor="secondary">
				Most Popular
			</Heading>
		</Container>

		<Container>
			<Heading lineLeft lineColor="secondary">
				Upcoming
			</Heading>
		</Container>

		<Container>
			<Heading lineLeft lineColor="secondary">
				Free Games
			</Heading>
		</Container>

		<Container>
			<Footer />
		</Container>
	</section>
)

export default Home
