import { createEffect, createSignal, For } from 'solid-js';
import AddTodo from './components/Todo/AddTodo';
import Title from './components/ui/Title';
import TodoItem from './components/Todo/TodoItem';

function App() {
	const [todoList, setTodoList] = createSignal<string[]>([]);
	createEffect(() => {
		console.log(todoList())
	})

	const setTodoListItem = (todoItem: string) =>
		setTodoList((currentTodoList) => [...currentTodoList, todoItem]);

	const removeTodoListItem = (todoItem: string) =>
		setTodoList((currentTodoList) =>
			currentTodoList.filter((item) => item !== todoItem),
		);

	return (
		<div class='flex flex-col h-full w-full items-center mt-5 mb-5 gap-5'>
			<Title>Todo List</Title>
			<AddTodo setTodoListItem={setTodoListItem} />
			<For each={todoList()} fallback={<p>Пока нет никаких заданий...</p>}>
				{(todo) => (
					<TodoItem text={todo} removeTodoListItem={removeTodoListItem} />
				)}
			</For>
		</div>
	);
}

export default App;
