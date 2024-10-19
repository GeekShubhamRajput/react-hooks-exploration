import { useReducer } from "react";

const initialState = 0

const reducer = (state, action) => {
  switch(action.type){
    case 'increment' :
      return state + 1
    case 'decrement' :
      return state - 1
    case 'reset' :
      return initialState
    default :
      return state
  }
}

export const MultipleReducer = () =>{
  
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState) 

  return(
    <div>
      <div>Count - {count}</div><br />
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button><br /><br />
      
      <div>Count Two - { countTwo }</div><br />
      <button onClick={() => dispatchTwo({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatchTwo({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatchTwo({type: 'reset'})}>Reset</button><br />
    </div>
  )
}
