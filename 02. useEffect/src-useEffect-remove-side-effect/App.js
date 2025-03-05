import { useState, useEffect } from "react";

function App() {
	const [windowWidth, setwindowWidth] = useState(4);

	const handleResize = () => {
		console.log('handleResize run');
		setwindowWidth(window.innerWidth)
	}

	useEffect(()=>{
		window.addEventListener('resize', handleResize)
		return () => {
			console.log('Remove resize listener');
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className='App'>
			<h1>useEffect</h1>
			<h3>Window width: {windowWidth}</h3>
		</div>
	);
}

export default App;
