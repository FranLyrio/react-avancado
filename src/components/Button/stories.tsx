import { Meta, Story } from '@storybook/react'
import { BsCartPlus } from 'react-icons/bs'

import Button from '.'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string'
		},
		icon: {
			type: 'symbol'
		}
	}
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
	children: 'Buy now'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
	children: 'Buy now',
	icon: <BsCartPlus />,
	size: 'small'
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
	size: 'large',
	as: 'a',
	href: '/link',
	children: 'Navigate'
}
