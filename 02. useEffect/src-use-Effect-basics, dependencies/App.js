import { useState, useEffect } from "react";

function getRandomValue (max){
    return Math.floor(Math.random() * max) + 1
}

function App() {
	const [counter, setcounter] = useState(0)
	const increase = () => setcounter(prev=> prev + 1)

	const [name, setname] = useState('');
	const changeName = (e) => setname(e.target.value)

	useEffect(()=>{
		console.log('useEffect run!');
	}, [counter])

	return (
		<div className='App'>
			<h1>useEffect</h1>
			<h3>Counter: {counter}</h3>
			<button onClick={increase}>Increase</button>
			<hr />
			<h3>Name: {name}</h3>
			<input type="text" onChange={changeName} />
		</div>
	);
}

export default App;
