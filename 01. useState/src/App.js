import { useState } from "react";

function getRandomValue() {
	console.log('getRandomValue');
	return Math.floor(Math.random() * 50)
}

function App() {
	const [counter, setCounter] = useState(()=>{return getRandomValue()})

	const resetCounter = () => {
		setCounter(0)
	}

	const increaseCounter = () => {
		setCounter((prev)=>{
			return prev + 1
		})
	}

	const decreaseCounter = () => {
		setCounter((prev)=> {
			return prev - 1
		})
	}

	// Пост в блоге
	const [post, setPost] = useState({
		title: 'Название поста',
		desc: 'Описание поста.'
	})

	const changeTitle = (e) => {
		setPost((prev)=>{
			return {
				...prev,
				title: e.target.value
			}
		})
	}

	const changeDesc = (e) => {
		setPost((prev)=>{
			return {
				...prev,
				desc: e.target.value
			}
		})
	}

	return (
		<div className='App'>
			<h1>useState</h1>
			<hr />
			<h2>Counter: {counter}</h2>
			<button onClick={increaseCounter}>Increase</button>
			<button onClick={decreaseCounter}>Decrease</button>
			<button onClick={resetCounter}>Reset</button>
			<hr />

			<h2>{post.title}</h2>
			<p>{post.desc}</p>
			<input onChange={changeTitle} value={post.title} type="text" placeholder="Введите название" /><br />
			<textarea value={post.desc} onChange={changeDesc} placeholder="Введите описание"></textarea>
		</div>

	);
}

export default App;
