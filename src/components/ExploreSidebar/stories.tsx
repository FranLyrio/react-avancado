import { Meta, Story } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'
import mock from './mock'

export default {
	title: 'ExploreSidebar',
	component: ExploreSidebar,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	},
	args: {
		items: mock
	}
} as Meta

export const Basic: Story<ExploreSidebarProps> = (args) => (
	<ExploreSidebar {...args} />
)
