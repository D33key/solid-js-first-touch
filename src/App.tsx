import { createSignal, Show } from 'solid-js';
import './App.css';
import Child from './components/Child';

function App() {
	const [count, setCount] = createSignal(0);
	const [inputValue, setInputValue] = createSignal('');

	const handler = (data: string, event: MouseEvent) => {
		console.log('Data:', data, 'Event:', event);
	};

	return (
		<div style='display: flex; flex-direction: column; gap: 20px;'>
			<Show
				when={count() >= 5}
				fallback={
					<button on:click={() => {
            console.log('Clicked')
            setCount((count) => count + 1)
            }}>
						count is {count()}
					</button>
				}
			>
				<Child />
			</Show>
			<hr style='width: 100%' />
			<div>
				<p
					classList={{
						red: inputValue() === 'red',
						yellow: inputValue() === 'yellow',
					}}
				>
					Type red or yellow to change color of this text!
				</p>
				<p>Input text value: {inputValue()}</p>
				<input
					type='text'
					value={inputValue()}
					onInput={(event) => setInputValue(event.target.value)}
				/>
			</div>
			<hr style='width: 100%' />
			<div>
				<button onClick={[handler, 'Hello!']}>Click Me</button>
			</div>
		</div>
	);
}

export default App;
