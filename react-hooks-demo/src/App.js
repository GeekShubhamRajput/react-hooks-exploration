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

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <EffectHookCounter />
      <EffectHookCounterOne />
      <ClassMouse />
      <EffectHookTwo />
      <EffectWithCleanUp />
      <EffectHookTimer />
      <FetchPosts />
      <FetchSinglePost />
      <FetchSingleRecordOne /> */}
      <UserContext.Provider value={'Shubham'} >
        <ChannelContext.Provider value={'GeekShubham'}>
          <ContextHook />
        </ChannelContext.Provider>
      </UserContext.Provider >
    </div>
  );
}

export default App;
