import './App.css';
import CounterClass from './components/CounterClass'
import {HookCounter} from './components/HookCounter'
import {HookCounterTwo} from './components/HookCounterTwo'

function App() {
  return (
    <div className="App">
      <CounterClass />
      <HookCounter />
      <HookCounterTwo />
    </div>
  );
}

export default App;
