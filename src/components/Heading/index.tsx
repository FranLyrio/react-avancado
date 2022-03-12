import * as S from './styles'

export type HeadingProps = {
	children: React.ReactNode
	color?: 'white' | 'black'
	lineLeft?: boolean
	lineBottom?: boolean
	size?: 'small' | 'medium'
}

const Heading = ({
	children,
	color = 'white',
	lineLeft = false,
	lineBottom = false,
	size = 'medium'
}: HeadingProps) => (
	<S.Wrapper
		size={size}
		color={color}
		lineLeft={lineLeft}
		lineBottom={lineBottom}
	>
		{children}
	</S.Wrapper>
)

export default Heading
