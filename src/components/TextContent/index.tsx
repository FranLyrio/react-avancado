import Heading from 'components/Heading'

import * as S from './styles'

export type TextContentProps = {
	content: string
	title?: string
}

const TextContent = ({ title, content }: TextContentProps) => (
	<S.Wrapper>
		{!!title && (
			<Heading lineLeft lineColor="secondary">
				{title}
			</Heading>
		)}

		<div dangerouslySetInnerHTML={{ __html: content }} />
	</S.Wrapper>
)

export default TextContent
