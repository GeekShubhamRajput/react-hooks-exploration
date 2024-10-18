import './App.css';
import React from 'react'
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

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ReducerCounter /> */}
      <ReducerCounterOne />
    </div>
  );
}

export default App;
