import './App.css';
import ClassCounterOne from './components/ClassCounterOne'
import { EffectHookCounter } from './components/EffectHookCounter';
import { EffectHookCounterOne } from "./components/EffectHookCounterOne";
import { EffectHookTwo } from "./components/EffectHookTwo";
import { EffectWithCleanUp } from "./components/EffectWithCleanUp";
import ClassMouse from "./components/ClassMouse";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne />
      <EffectHookCounter />
      <EffectHookCounterOne />
      <ClassMouse />
      <EffectHookTwo /> */}
      <EffectWithCleanUp />
    </div>
  );
}

export default App;
