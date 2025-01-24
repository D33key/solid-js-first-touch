import Button from '../button';

interface TodoItemProps {
	text: string;
	removeTodoListItem: (todoItem: string) => string[];
}

function TodoItem({ text, removeTodoListItem }: TodoItemProps) {
	return (
		<div class='flex gap-5 items-center '>
			<p class='border border-black p-[20px]'>{text}</p>
			<Button on:click={() => removeTodoListItem(text)}>Remove</Button>
		</div>
	);
}

export default TodoItem;
