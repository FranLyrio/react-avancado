import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
	cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
	<>
		<Heading lineBottom color="black" size="small">
			My cards
		</Heading>

		{cards?.map((card, index) => (
			<S.Card key={index}>
				<img src={card.flagImg} alt={card.cardFlag} />
				<span>{card.cardNumber}</span>
			</S.Card>
		))}
	</>
)

export default CardsList
