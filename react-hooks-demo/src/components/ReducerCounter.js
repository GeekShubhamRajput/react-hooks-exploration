import { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) =>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset': 
      return initialState
    default:
      return state
  }
}

export const ReducerCounter = () => {
  
  const [count, dispatch] = useReducer(reducer, initialState)
  
  return(
    <div>
      <div>Counter - {count}</div><br />
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <hr /><br />
    </div>
  )  
}
