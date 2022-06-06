import { Meta, Story } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
	title: 'Checkbox',
	component: Checkbox
} as Meta

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />
