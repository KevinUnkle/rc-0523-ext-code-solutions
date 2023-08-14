import CustomButton from './CustomButton';
import './App.css';

export default function App() {
  function handleCustomClick(text) {
    alert(`Clicked ${text}`);
  }
  return (
    <div className="App">
      <CustomButton
        text="Button 1"
        color="red"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Button 2"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Button 3"
        color="blue"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}
