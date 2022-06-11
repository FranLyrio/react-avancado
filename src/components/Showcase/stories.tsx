import { Meta, Story } from '@storybook/react'

import gamesMock from '../GameCardSlider/mock'
import highlightMock from '../Highlight/mock'
import Showcase, { ShowcaseProps } from '.'

export default {
	title: 'Showcase',
	component: Showcase,
	decorators: [
		(Story) => (
			<div style={{ margin: '0 auto' }}>
				<Story />
			</div>
		)
	],
	parameters: {
		layoyt: 'fullscreen',
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<ShowcaseProps> = (args) => <Showcase {...args} />
Basic.args = {
	games: gamesMock,
	highlight: highlightMock,
	title: 'Most Popular'
}

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
	<Showcase {...args} />
)
WithoutTitle.args = {
	games: gamesMock,
	highlight: highlightMock
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
	<Showcase {...args} />
)
WithoutHighlight.args = {
	games: gamesMock,
	title: 'Most Popular'
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
	<Showcase {...args} />
)
WithoutGames.args = {
	title: 'Most Popular',
	highlight: highlightMock
}
