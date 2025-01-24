import { JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

interface TitleProps {
	as?: 'h1' | 'h2' | 'h3';
	children: JSX.Element;
	className?: string;
}

const titleClass = {
	h1: 'text-5xl font-bold',
	h2: 'text-3xl font-bold',
	h3: 'text-xl font-bold',
} as const;

function Title({ as = 'h1', children, className }: TitleProps) {
	return (
		<Dynamic
			component={as}
			class={className}
			classList={{
				[titleClass.h1]: as === 'h1',
				[titleClass.h2]: as === 'h2',
				[titleClass.h3]: as === 'h3',
			}}
		>
			{children}
		</Dynamic>
	);
}

export default Title;
