import './App.css';
import HotButton from './HotButton';
import { useState } from 'react';

function App() {
  let [temp, setTemp] = useState('dark');
  let [counter, setCounter] = useState(0);

  function handleClick() {
    let tempHolder;
    if (counter < 2) {
      tempHolder = 'dark';
    } else if (counter < 5) {
      tempHolder = 'cold';
    } else if (counter < 8) {
      tempHolder = 'cool';
    } else if (counter < 11) {
      tempHolder = 'tepid';
    } else if (counter < 14) {
      tempHolder = 'warm';
    } else if (counter < 17) {
      tempHolder = 'hot';
    } else {
      tempHolder = 'nuclear';
    }
    setCounter(counter + 1);
    setTemp(tempHolder);
  }
  return (
    <div className="App">
      <header className="App-header">
        <HotButton onCustomClick={handleClick} classTemp={temp}></HotButton>
        <p>Clicks: {counter}</p>
      </header>
    </div>
  );
}

export default App;
