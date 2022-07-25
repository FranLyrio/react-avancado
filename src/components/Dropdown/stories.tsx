import { Meta, Story } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'

export default {
	title: 'Dropdown',
	component: Dropdown,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<DropdownProps> = (args) => <Dropdown {...args} />
Basic.args = {
	title: 'Title',
	children: 'content'
}
