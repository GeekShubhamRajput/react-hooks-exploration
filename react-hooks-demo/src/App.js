import './App.css';
import CounterClass from './components/CounterClass'
import {HookCounter} from './components/HookCounter'

function App() {
  return (
    <div className="App">
      <CounterClass />
      <HookCounter />
    </div>
  );
}

export default App;
