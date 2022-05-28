import { Meta, Story } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
	title: 'GameCard',
	component: GameCard,
	args: {
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 200,00'
	}
} as Meta

export const Basic: Story<GameCardProps> = (args) => <GameCard {...args} />