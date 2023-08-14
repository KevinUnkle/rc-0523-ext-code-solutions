import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useSate', isClicked);

  function handleClick() {
    console.log('before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter', isClicked);
  }

  const bkgColor = isClicked ? color : 'white';
  return (
    <button onClick={handleClick} style={{ backgroundColor: bkgColor }}>
      {text}
    </button>
  );
}
