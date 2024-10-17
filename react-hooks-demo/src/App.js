import './App.css';
import ClassCounterOne from './components/ClassCounterOne'
import { EffectHookCounter } from './components/EffectHookCounter';
import { EffectHookCounterOne } from "./components/EffectHookCounterOne";
import { EffectHookTwo } from "./components/EffectHookTwo";
import { EffectWithCleanUp } from "./components/EffectWithCleanUp";
import { EffectHookTimer } from "./components/EffectHookTimer"
import { FetchPosts } from './components/FetchPosts';
import { FetchSinglePost } from './components/FetchSinglePost'
import { FetchSingleRecordOne } from './components/FetchSingleRecordOne'
import ClassMouse from "./components/ClassMouse";

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
      <FetchSinglePost /> */}
      <FetchSingleRecordOne />
    </div>
  );
}

export default App;
