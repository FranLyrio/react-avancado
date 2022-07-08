import { Meta, Story } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'
import mock from './mock'

export default {
	title: 'PaymentOptions',
	component: PaymentOptions,
	args: {
		cards: mock
	},
	argTypes: {
		handlePayment: {
			action: 'clicked'
		}
	},
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<PaymentOptionsProps> = (args) => (
	<PaymentOptions {...args} />
)
