import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import Base from 'templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
	cover: string
	gameInfo: GameInfoProps
	gallery?: GalleryImageProps[]
}

const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => (
	<Base>
		<S.Cover src={cover} role="image" aria-label="cover" />
		<S.Main>
			<S.SectionGameInfo>
				<GameInfo {...gameInfo} />
			</S.SectionGameInfo>

			<S.SectionGameInfo>
				{!!gallery && <Gallery items={gallery} />}
			</S.SectionGameInfo>
		</S.Main>
	</Base>
)

export default Game
