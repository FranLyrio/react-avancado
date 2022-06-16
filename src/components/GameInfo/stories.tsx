import { Meta, Story } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mock from './mock'

export default {
	title: 'GameInfo',
	component: GameInfo,
	args: mock,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<GameInfoProps> = (args) => (
	<div style={{ maxWidth: '144rem' }}>
		<GameInfo {...args} />
	</div>
)
