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
	},
	argTypes: {
		onFav: {
			action: 'was clicked'
		},
		ribbon: { type: 'string' }
	}
} as Meta

export const Basic: Story<GameCardProps> = (args) => <GameCard {...args} />

export const WithRibbon: Story<GameCardProps> = (args) => (
	<div style={{ width: '30rem' }}>
		<GameCard {...args} />
	</div>
)

WithRibbon.args = {
	ribbonText: '20% OFF',
	ribbonSize: 'small',
	ribbonColor: 'primary'
}
