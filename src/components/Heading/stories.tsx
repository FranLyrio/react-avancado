import { Meta, Story } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
	title: 'Heading',
	component: Heading,
	argTypes: {
		children: {
			type: 'string'
		}
	}
} as Meta

export const Basic: Story<HeadingProps> = (args) => (
	<Heading {...args}>Most Populars</Heading>
)
