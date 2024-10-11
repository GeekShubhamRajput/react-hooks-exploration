import {useState, useEffect} from 'react'

export const EffectHookCounter = () =>{
  
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `Clicked button ${count} times`
  })

  return(
    <>
      <span>Count: {count}</span><br /><br />
      <button onClick={() => setCount(preCount => preCount + 1 )}>Increment 1</button>
      <hr /><br />
    </>
  )
}
