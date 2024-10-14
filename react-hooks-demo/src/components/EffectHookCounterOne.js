import { useState, useEffect } from 'react'

export const EffectHookCounterOne = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Logged')
    document.title = `You clicked ${count} times`
  }, [count])

  return(
    <div>
      <span>Count: {count}</span><br /><br />
      <button onClick={() => setCount(count + 1)}>Increment 1</button><br /><br />
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <hr /><br />
    </div>
  )
}
