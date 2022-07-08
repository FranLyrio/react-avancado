import { Add, ShoppingCart } from 'styled-icons/material-outlined'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'

import * as S from './styles'

export type PaymentCard = {
	cardNumber: string
	cardFlag: string
	flagImg: string
}

export type PaymentOptionsProps = {
	handlePayment: () => void
	cards?: PaymentCard[]
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
	<S.Wrapper>
		<S.Body>
			<Heading color="black" size="small">
				Payment
			</Heading>

			<S.CardsList>
				{cards?.map((card) => (
					<S.CardItem key={card.cardNumber}>
						<S.CardInfo>
							<img src={card.flagImg} alt={card.cardFlag} />
							{card.cardNumber}
						</S.CardInfo>
						<Radio
							name="credit-card"
							id={card.cardNumber}
							value={card.cardNumber}
							onCheck={() => ({})}
						/>
					</S.CardItem>
				))}

				<S.AddCard role="button">
					<Add size={14} /> Add a new credit card
				</S.AddCard>
			</S.CardsList>
		</S.Body>
		<S.Footer>
			<Button as="a" fullWidth minimal>
				Continue shopping
			</Button>
			<Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
				Buy now
			</Button>
		</S.Footer>
	</S.Wrapper>
)

export default PaymentOptions
