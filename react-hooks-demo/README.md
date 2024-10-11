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

## 
