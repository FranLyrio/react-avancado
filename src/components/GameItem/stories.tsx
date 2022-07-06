import { Meta, Story } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
	title: 'GameItem',
	component: GameItem,
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/151x70',
		title: 'Red Dead Redemption 2',
		price: 'R$ 125,00'
	}
} as Meta

export const Basic: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
	<GameItem {...args} />
)
WithPayment.args = {
	downloadLink: 'https://wongames.com/game/download/21312',
	paymentInfo: {
		cardFlag: 'mastercard',
		flagImg: '/img/master-card.png',
		cardNumber: '**** **** **** 4326',
		purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
	}
}
