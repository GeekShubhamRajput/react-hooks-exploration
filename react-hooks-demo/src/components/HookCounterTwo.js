import {useState} from 'react'

export const HookCounterTwo = () =>{
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  return(
    <div>
      <span>Hook Count - {count} </span><br /><br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment 1</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement 1</button>
      <hr /><br />
    </div>
  )
}
