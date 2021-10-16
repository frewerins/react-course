import './App.css';
import {Clock} from './Clock';

function App() {
  return (
    <div className="container">
      <Clock name="first" initialNumberOfCounter={0}/>
      <Clock name="second" initialNumberOfCounter={10}/>
    </div>
  );
}

export default App;
