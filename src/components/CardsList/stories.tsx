import { Meta, Story } from '@storybook/react'
import CardsList, { CardsListProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
	title: 'Profile/CardsList',
	component: CardsList,
	args: {
		cards: cardsMock
	}
} as Meta

export const Basic: Story<CardsListProps> = (args) => <CardsList {...args} />
