import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import CartDropdown from 'components/CartDropdown'
import Cart from 'components/Cart'
import UserDropdown from 'components/UserDropdown'

import * as S from './styles'

export type MenuProps = {
	username?: string
}

const Menu = ({ username }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<S.Wrapper>
			<MediaMatch lessThan="medium">
				<S.IconWrapper onClick={() => setIsOpen(true)}>
					<MenuIcon aria-label="Open menu" />
				</S.IconWrapper>
			</MediaMatch>

			<S.LogoWrapper>
				<Link href="/" passHref>
					<a>
						<Logo hideOnMobile />
					</a>
				</Link>
			</S.LogoWrapper>

			<MediaMatch greaterThan="medium">
				<S.MenuNav>
					<Link href="/" passHref>
						<S.MenuLink>Home</S.MenuLink>
					</Link>
					<Link href="/games" passHref>
						<S.MenuLink>Explore</S.MenuLink>
					</Link>
				</S.MenuNav>
			</MediaMatch>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="Search" />
				</S.IconWrapper>

				<S.IconWrapper>
					<MediaMatch greaterThan="medium">
						<CartDropdown />
					</MediaMatch>

					<MediaMatch lessThan="medium">
						<Link href="/cart">
							<a>
								<Cart />
							</a>
						</Link>
					</MediaMatch>
				</S.IconWrapper>

				{!username ? (
					<MediaMatch greaterThan="medium">
						<Link href="/sign-in" passHref>
							<Button as="a">Sign in</Button>
						</Link>
					</MediaMatch>
				) : (
					<UserDropdown username={username} />
				)}
			</S.MenuGroup>

			<S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
				<CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
				<S.MenuNav>
					<Link href="/" passHref>
						<S.MenuLink>Home</S.MenuLink>
					</Link>
					<Link href="/games" passHref>
						<S.MenuLink>Explore</S.MenuLink>
					</Link>

					{!!username && (
						<>
							<Link href="/profile/me" passHref>
								<S.MenuLink>My profile</S.MenuLink>
							</Link>

							<Link href="/profile/wishlist" passHref>
								<S.MenuLink>Wishlist</S.MenuLink>
							</Link>
						</>
					)}
				</S.MenuNav>

				{!username && (
					<S.RegisterBox>
						<Link href="/sign-in" passHref>
							<Button fullWidth size="large">
								Sign in
							</Button>
						</Link>
						<span>or</span>
						<Link href="/sign-up" passHref>
							<S.CreateAccount title="Sign up">Sign up</S.CreateAccount>
						</Link>
					</S.RegisterBox>
				)}
			</S.MenuFull>
		</S.Wrapper>
	)
}

export default Menu
