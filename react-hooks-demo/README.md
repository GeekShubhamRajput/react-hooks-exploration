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
useReducer(reducer, initialState)

`const [state, dispatch] = useReducer(reducer, { age: 42 });`
