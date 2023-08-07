import ToggleButton from './ToggleButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Button 1" color="red" />
      <ToggleButton text="Button 2" color="green" />
      <ToggleButton text="Button 3" color="blue" />
    </div>
  );
}

export default App;
