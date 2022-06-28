import TextContent from 'components/TextContent'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import Base from 'templates/Base'

import * as S from './styles'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

export type GameTemplateProps = {
	cover: string
	description: string
	gameInfo: GameInfoProps
	details: GameDetailsProps
	upcomingGames: GameCardProps[]
	upcomingHighlight: HighlightProps
	recommendedGames: GameCardProps[]
	gallery?: GalleryImageProps[]
}

const Game = ({
	cover,
	gameInfo,
	gallery,
	description,
	details,
	recommendedGames,
	upcomingGames,
	upcomingHighlight
}: GameTemplateProps) => (
	<Base>
		<S.Cover src={cover} role="image" aria-label="cover" />
		<S.Main>
			<S.SectionGameInfo>
				<GameInfo {...gameInfo} />
			</S.SectionGameInfo>

			<S.SectionGameInfo>
				{!!gallery && <Gallery items={gallery} />}
			</S.SectionGameInfo>

			<S.SectionDescription>
				<TextContent title="Description" content={description} />
			</S.SectionDescription>

			<S.SectionGameDetails>
				<GameDetails {...details} />
			</S.SectionGameDetails>

			<Showcase
				title="Upcoming"
				games={upcomingGames}
				highlight={upcomingHighlight}
			/>

			<Showcase title="You may like this games" games={recommendedGames} />
		</S.Main>
	</Base>
)

export default Game
