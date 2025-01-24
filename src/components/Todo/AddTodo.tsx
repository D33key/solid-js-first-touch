import { createSignal } from 'solid-js';
import Button from '../button';
import Input from '../ui/Input';

interface AddTodoProps {
	setTodoListItem: (todoItem: string) => void;
}

function AddTodo({ setTodoListItem }: AddTodoProps) {
	const [inputValue, setInputValue] = createSignal('');

	return (
		<div class='flex gap-5'>
			<Input
				type='text'
				value={inputValue()}
				onChange={(event) => setInputValue(event.currentTarget.value)}
			/>
			<Button
				type='button'
				onClick={() => {
					setTodoListItem(inputValue());
					setInputValue('');
				}}
			>
				Add
			</Button>
		</div>
	);
}

export default AddTodo;
