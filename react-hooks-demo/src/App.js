import './App.css';
import CounterClass from './components/CounterClass'
import {HookCounter} from './components/HookCounter'
import {HookCounterTwo} from './components/HookCounterTwo'
import {HookCounterThree} from './components/HookCounterThree'

function App() {
  return (
    <div className="App">
      <CounterClass />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
    </div>
  );
}

export default App;
