import { Meta, Story } from '@storybook/react'
import ExploreSidebar from '.'

export default {
	title: 'ExploreSidebar',
	component: ExploreSidebar,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story = (args) => <ExploreSidebar {...args} />
