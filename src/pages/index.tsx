import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />
}

export function getServerSideProps() {
	return {
		props: {
			banners: bannersMock,
			newGames: gamesMock,
			mostPopularHighlight: highLightMock,
			mostPopularGames: gamesMock,
			upcomingGames: gamesMock,
			upcomingHighligth: highLightMock,
			upcomingMoreGames: gamesMock,
			freeGames: gamesMock,
			freeHighligth: highLightMock
		}
	}
}
