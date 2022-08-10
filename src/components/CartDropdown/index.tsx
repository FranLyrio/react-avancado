import Cart from 'components/Cart'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartDropdownProps = {
	items?: GameItemProps[]
	total?: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
	<S.Wrapper>
		<Dropdown title={<Cart itemsQuantity={items?.length} />}>
			<CartList items={items} total={total} hasButton />
		</Dropdown>
	</S.Wrapper>
)

export default CartDropdown
