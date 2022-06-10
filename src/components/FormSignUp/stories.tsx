import { Meta, Story } from '@storybook/react'
import FormSignUp from '.'

export default {
	title: 'FormSignUp',
	component: FormSignUp
} as Meta

export const Basic: Story = (args) => <FormSignUp {...args} />
