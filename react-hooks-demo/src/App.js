import './App.css';
import ClassCounterOne from './components/ClassCounterOne'
import { EffectHookCounter } from './components/EffectHookCounter';
import { EffectHookCounterOne } from "./components/EffectHookCounterOne";
import ClassMouse from "./components/ClassMouse";

function App() {
  return (
    <div className="App">
      <ClassCounterOne />
      <EffectHookCounter />
      <EffectHookCounterOne />
      <ClassMouse />
    </div>
  );
}

export default App;
