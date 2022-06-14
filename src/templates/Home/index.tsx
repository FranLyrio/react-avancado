import { GameCardProps } from 'components/GameCard'
import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

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
			<Showcase title="News" games={newGames} />
		</S.SectionNews>

		<Showcase
			title="Most Popular"
			highlight={mostPopularHighlight}
			games={mostPopularGames}
		/>

		<S.SectionUpcoming>
			<Showcase title="Upcoming" games={upcomingGames} />
			<Showcase highlight={upcomingHighligth} games={upcomingMoreGames} />
		</S.SectionUpcoming>

		<Showcase title="Free games" highlight={freeHighligth} games={freeGames} />

		<S.SectionFooter>
			<Container>
				<Footer />
			</Container>
		</S.SectionFooter>
	</section>
)

export default Home
