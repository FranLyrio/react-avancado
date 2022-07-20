import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './styles'

export type CartProps = {
	itemsQuantity?: number
}

const Cart = ({ itemsQuantity = 0 }: CartProps) => (
	<S.Wrapper>
		{itemsQuantity > 0 && (
			<S.Badge aria-label="Cart Items">{itemsQuantity}</S.Badge>
		)}
		<ShoppingCart aria-label="Shopping Cart" />
	</S.Wrapper>
)

export default Cart
