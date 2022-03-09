import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from '../Logo'
import * as S from './styles'
import { useState } from 'react'

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<S.Wrapper>
			<S.IconWrapper onClick={() => setIsOpen(true)}>
				<MenuIcon aria-label="Open menu" />
			</S.IconWrapper>

			<S.LogoWrapper>
				<Logo hideOnMobile />
			</S.LogoWrapper>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="Search" />
				</S.IconWrapper>

				<S.IconWrapper>
					<ShoppingCartIcon aria-label="Open shopping cart" />
				</S.IconWrapper>
			</S.MenuGroup>

			<S.MenuFull aria-hidden={!isOpen}></S.MenuFull>
		</S.Wrapper>
	)
}

export default Menu
