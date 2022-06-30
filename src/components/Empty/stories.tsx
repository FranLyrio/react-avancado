import { Meta, Story } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
	title: 'Empty',
	component: Empty,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<EmptyProps> = (args) => <Empty {...args} />

Basic.args = {
	title: 'Your wishlist is empty',
	description: 'Games addes to your wishlist will appear here'
}
