import { Meta, Story } from '@storybook/react'
import FormSignIn from '.'

export default {
	title: 'FormSignIn',
	component: FormSignIn
} as Meta

export const Basic: Story = (args) => (
	<div style={{ width: 300, margin: 'auto' }}>
		<FormSignIn {...args} />
	</div>
)
