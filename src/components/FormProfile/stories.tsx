import { Meta, Story } from '@storybook/react'
import FormProfile from '.'

export default {
	title: 'Form/FormProfile',
	component: FormProfile
} as Meta

export const Basic: Story = (args) => <FormProfile {...args} />
