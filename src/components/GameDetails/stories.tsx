import { Meta, Story } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

export default {
	title: 'Game/GameDetails',
	component: GameDetails,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	},
	args: {
		platforms: ['linux', 'windows', 'mac']
	},
	argTypes: {
		platforms: {
			control: {
				type: 'inline-check',
				options: ['windows', 'linux', 'mac']
			}
		}
	}
} as Meta

export const Basic: Story<GameDetailsProps> = (args) => (
	<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
		<GameDetails {...args} />
	</div>
)
