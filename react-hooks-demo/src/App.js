import './App.css';
import React, { useReducer } from 'react'
import ClassCounterOne from './components/ClassCounterOne'
import { EffectHookCounter } from './components/EffectHookCounter';
import { EffectHookCounterOne } from "./components/EffectHookCounterOne";
import { EffectHookTwo } from "./components/EffectHookTwo";
import { EffectWithCleanUp } from "./components/EffectWithCleanUp";
import { EffectHookTimer } from "./components/EffectHookTimer"
import { FetchPosts } from './components/FetchPosts';
import { FetchSinglePost } from './components/FetchSinglePost'
import { FetchSingleRecordOne } from './components/FetchSingleRecordOne'
import { ComponentF } from './components/ComponentF'
import { ContextHook } from './components/ContextHook'
import ClassMouse from "./components/ClassMouse";
import { ReducerCounter } from "./components/ReducerCounter"
import { ReducerCounterOne } from "./components/ReducerCounterOne"
import { MultipleReducer } from "./components/MultipleReducer"
import { ComponentX } from './components/ComponentX'
import { ComponentY } from './components/ComponentY'
import { ComponentZ } from './components/ComponentZ'
import { EffectHookFetchPost } from './components/EffectHookFetchPost'
import { ReducerFetchData } from './components/ReducerFetchData';
import { ParentComponent } from './components/ParentComponent';
import { TwoCounter } from './components/TwoCounter';
import { RefInputFocus } from './components/RefInputFocus'
import ClassTimer from './components/ClassTimer';
import RefTimer from './components/RefTimer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
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

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}} >
      <div className="App">
        {/* <ReducerCounter />
        <ReducerCounterOne />
        <MultipleReducer />
        <h2>App Count - {count} </h2>
        <ComponentX />
        <ComponentY />
        <ComponentZ />
        <EffectHookFetchPost />
        <ReducerFetchData />
        <ParentComponent />
        <TwoCounter />
        <RefInputFocus /> */}
        <ClassTimer />
        <RefTimer />
      </div>
    // </CountContext.Provider>
  );
}

export default App;
