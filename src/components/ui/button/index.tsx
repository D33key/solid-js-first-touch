import { JSX } from 'solid-js';

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
}

const variant = {
	primary: 'font-bold bg-amber-300 hover:bg-amber-100 duration-300 ease-in-out',
	secondary: '',
};

function Button(props: ButtonProps) {
	return (
		<button class={variant[props.variant ?? 'primary']} {...props}>
			{props.children}
		</button>
	);
}

export default Button;
