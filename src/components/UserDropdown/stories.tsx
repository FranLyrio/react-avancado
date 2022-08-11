import { Meta, Story } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from '.'

export default {
	title: 'UserDropdown',
	component: UserDropdown,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	},
	args: {
		username: 'Fran'
	}
} as Meta

export const Basic: Story<UserDropdownProps> = (args) => (
	<div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
		<UserDropdown {...args} />
	</div>
)
