import React, { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev() {
    const previousIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(previousIndex);
  }

  function handleSelect(index) {
    setCurrentIndex(index);
  }
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <div>
        <PrevButton onPrev={handlePrev} />
        <Indicators
          count={items.length}
          currentIndex={currentIndex}
          onSelect={handleSelect}
        />
        <NextButton onNext={handleNext} />
      </div>
    </div>
  );
}

function Banner({ item }) {
  return <div>{item}</div>;
}

function NextButton({ onNext }) {
  return (
    <button type="button" onClick={onNext} style={{ backgroundColor: 'white' }}>
      Next
    </button>
  );
}

function PrevButton({ onPrev }) {
  return (
    <button type="button" onClick={onPrev} style={{ backgroundColor: 'white' }}>
      Prev
    </button>
  );
}

function Indicators({ count, currentIndex, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        onClick={() => onSelect(i)}
        style={{ backgroundColor: i === currentIndex ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
