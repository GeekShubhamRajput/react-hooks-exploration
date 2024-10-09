import {useState} from 'react'

export const HookCounter = () => {
  const [count, setCount] = useState(0)
  
  return(
    <div>
      <span>Hook Count - {count}</span><br /><br />
      <button onClick={() => setCount(count + 1)}>Increment 1</button>
      <hr /><br />
    </div>
  )
}
