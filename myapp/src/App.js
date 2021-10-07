import './App.css';
import {Clock} from './Clock';

function App() {
  return (
    <div className="container">
      <Clock name="first" initialState="10"/>
      <Clock name="second" initialState="20"/>
    </div>
  );
}

export default App;
