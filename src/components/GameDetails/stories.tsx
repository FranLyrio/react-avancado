import { Meta, Story } from '@storybook/react'
import GameDetails from '.'

export default {
	title: 'GameDetails',
	component: GameDetails
} as Meta

export const Basic: Story = (args) => <GameDetails {...args} />
