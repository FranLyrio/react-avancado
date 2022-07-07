import { Meta, Story } from '@storybook/react'
import CartList, { CartListProps } from '.'
import mockItems from './mock'

export default {
	title: 'CartList',
	component: CartList,
	args: {
		items: mockItems,
		total: 'R$ 330,00'
	},
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<CartListProps> = (args) => <CartList {...args} />
