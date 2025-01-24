import { JSX } from 'solid-js';

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
	return <input {...props} />;
}

export default Input;
