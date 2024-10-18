import { useReducer } from 'react'

const initialState = { firstCount: 0, secondCount: 10 }

const reducer = (state, action) =>{
  switch(action.type){
    case 'increment':
      return { ...state, firstCount: state.firstCount + action.value }
    case 'decrement':
      return { ...state, firstCount: state.firstCount - action.value }
    case 'increment2':
      return { ...state, secondCount: state.secondCount + action.value }
    case 'decrement2':
      return { ...state, secondCount: state.secondCount - action.value }
    case 'reset':
      return initialState
    default :
      return state
  }
}

export const ReducerCounterOne = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return(
    <div>
      <div>First Counter - {count.firstCount}</div><br />
      <div>Second Counter - {count.secondCount}</div><br />
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button><br />
      <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>Increment 2</button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>Decrement 2</button><br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}
