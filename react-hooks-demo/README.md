# React Hooks

## useState Hook

useState is a React Hook that lets you add a state variable to your component.

`const [name, setName] = useState('')`

## useEffect

useEffect is a React Hook that lets you synchronize a component with an external system.

`useEffect(setup, dependencies?)`

```javascript
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);
```

#### Fetch Data using useEffect
```javascript
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data)
      setPosts(res.data)
    }).catch(err => console.log(err))
  }, [])
```

## useContext

Context provides a way to pass data throgh the component tree without having to pass props down manually at every level.

```javascript
const UserContext = React.createContext(defaultValue)

<UserContext.Provider value="somevalue">
  <ComponentName />
</UserContext.Provider>
```

`const value = useContext(UserContext)`

## useReducer

useReducer is a hook that is used for state management in React.
useReducer is related to reducer function.

`const reducer = (state, action) => {}`

useReducer(reducer, initialState)

`const [state, dispatch] = useReducer(reducer, { age: 42 });`

### useState Vs useReducer:
**1. Simplicity vs Complexity:** useState is simple and best for straightforward state updates, while useReducer is more powerful and suited for managing complex state transitions.

**2. Updates:** With useState, you directly set the new state, whereas with useReducer, you define actions that dictate how the state changes through a reducer.

**3. Scaling:** useState is perfect for smaller components with minimal state. As your application grows and state management becomes more intricate, useReducer offers a more scalable solution.

If your state logic is complex or dependent on multiple actions, go with useReducer. For simpler cases, useState is more than sufficient.

## useCallback

useCallback is a React Hook that lets you cache a function definition between re-renders.

`const cachedFn = useCallback(fn, dependencies)`
