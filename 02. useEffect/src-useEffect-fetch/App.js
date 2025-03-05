import { useState, useEffect } from "react";

function App() {
	const [todoTitle, setTodoTitle] = useState('Watch react tuts');

	function getRandomValue (max){
		return Math.floor(Math.random() * max) + 1
	}

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${getRandomValue(200)}`)
			.then(response => response.json())
			.then(data => setTodoTitle(data.title))
	}, [])

	return (
		<div className='App'>
			<h1>useEffect</h1>
			<hr />
			<p>Random ToDo item: <strong>{todoTitle}</strong></p>
		</div>
	);
}

export default App;
