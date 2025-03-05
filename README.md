# React_hooks

```
git remote add origin git@github.com:IgorMan2005/React_hooks.git
git branch -M main
git push -u origin main
```

#### Built-in React Hooks

<https://react.dev/reference/react/hooks>

#### Хуки в React JS

<https://school.webcademy.ru/teach/control/stream/view/id/606654388>

1. useState
   <https://school.webcademy.ru/pl/teach/control/lesson/view?id=247731047>

   const [state, setState] = useState(initialState)
   <https://react.dev/reference/react/useState>

```
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
}

export default App;
```

2. useEffect
   <https://school.webcademy.ru/pl/teach/control/lesson/view?id=247731053>
   useEffect(setup, dependencies?)
   <https://react.dev/reference/react/useEffect>

```
const [counter, setcounter] = useState(0);

// по умолчанию запускается при каждом рендиренге компонента
// в данном случае, при изменении counter:
useEffect(()=>{
		console.log('useEffect run!');
	}, [counter])


// [] - Только при первичном рендере
useEffect(()=>{
		console.log('useEffect run!');
	}, [])


```
