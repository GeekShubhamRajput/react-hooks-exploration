import './App.css';
import ClassCounterOne from './components/ClassCounterOne'
import { EffectHookCounter } from './components/EffectHookCounter';

function App() {
  return (
    <div className="App">
      <ClassCounterOne />
      <EffectHookCounter />
    </div>
  );
}

export default App;
