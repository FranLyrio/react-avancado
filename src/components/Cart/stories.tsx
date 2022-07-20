import { Meta, Story } from '@storybook/react'
import Cart, { CartProps } from '.'

export default {
	title: 'Cart',
	component: Cart,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	}
} as Meta

export const Basic: Story<CartProps> = (args) => <Cart {...args} />

export const WithBadge: Story<CartProps> = (args) => <Cart {...args} />
WithBadge.args = {
	itemsQuantity: 2
}
