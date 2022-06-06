import { GameCardProps } from '../../components/GameCard'
import { BannerProps } from '../../components/Banner'
import { HighlightProps } from '../../components/Highlight'

import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import BannerSlider from '../../components/BannerSlider'
import GameCardSlider from '../../components/GameCardSlider'
import Highlight from '../../components/Highlight'

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
			<S.SectionBanner>
				<BannerSlider items={banners} />
			</S.SectionBanner>
		</Container>

		<S.SectionNews>
			<Container>
				<Heading lineLeft lineColor="secondary">
					News
				</Heading>
				<GameCardSlider items={newGames} arrowColor="black" />
			</Container>
		</S.SectionNews>

		<Container>
			<S.SectionMostPopular>
				<Heading lineLeft lineColor="secondary">
					Most Popular
				</Heading>
				<Highlight {...mostPopularHighlight} />
				<GameCardSlider items={mostPopularGames} />
			</S.SectionMostPopular>

			<S.SectionUpcoming>
				<Heading lineLeft lineColor="secondary">
					Upcoming
				</Heading>
				<GameCardSlider items={upcomingGames} />
				<Highlight {...upcomingHighligth} />
				<GameCardSlider items={upcomingMoreGames} />
			</S.SectionUpcoming>

			<S.SectionFreeGames>
				<Heading lineLeft lineColor="secondary">
					Free games
				</Heading>
				<Highlight {...freeHighligth} />
				<GameCardSlider items={freeGames} />
			</S.SectionFreeGames>
		</Container>

		<S.SectionFooter>
			<Container>
				<Footer />
			</Container>
		</S.SectionFooter>
	</section>
)

export default Home
