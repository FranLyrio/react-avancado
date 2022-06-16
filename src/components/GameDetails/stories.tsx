import { Meta, Story } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

export default {
	title: 'Game/GameDetails',
	component: GameDetails,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<GameDetailsProps> = (args) => (
	<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
		<GameDetails {...args} />
	</div>
)
Basic.args = {
	platforms: ['linux', 'windows', 'mac']
}
