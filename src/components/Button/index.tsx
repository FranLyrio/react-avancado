import * as S from './styles';

export type ButtonProps = {
	children?: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	children,
	icon,
	size = 'medium',
	fullWidth = false,
	...props
}: ButtonProps) => (
	<S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
		{!!icon && icon}

		{!!children && <span>{children}</span>}
	</S.Wrapper>
);

export default Button;
