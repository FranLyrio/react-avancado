import Button from '../Button'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'

import * as S from './styles'

export type BannerProps = {
	img: string
	title: string
	subtitle: string
	buttonLabel: string
	buttonLink: string
	ribbonText?: string
	ribbonSize?: RibbonSizes
	ribbonColor?: RibbonColors
}

const Banner = ({
	buttonLabel,
	buttonLink,
	img,
	subtitle,
	title,
	ribbonColor = 'primary',
	ribbonSize = 'normal',
	ribbonText
}: BannerProps) => (
	<S.Wrapper>
		<S.Image src={img} role="img" aria-label={title} />

		<S.Caption>
			<S.Title>{title}</S.Title>
			<S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
			<Button as="a" href={buttonLink} size="large">
				{buttonLabel}
			</Button>
		</S.Caption>

		{!!ribbonText && (
			<Ribbon color={ribbonColor} size={ribbonSize}>
				{ribbonText}
			</Ribbon>
		)}
	</S.Wrapper>
)
export default Banner
