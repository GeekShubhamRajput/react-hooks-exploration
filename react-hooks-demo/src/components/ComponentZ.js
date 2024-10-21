import { useContext } from "react"
import { CountContext } from "../App"

export const ComponentZ = () => {

  const countContext = useContext(CountContext)
  return(
    <div>
      <h1>Component Z - {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch('increment')}> Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}> Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}> Reset</button>
      <br /><hr />
    </div>
  )
}
