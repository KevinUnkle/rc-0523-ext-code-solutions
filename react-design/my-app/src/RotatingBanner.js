import React from 'react';

export default function RotatingBanner({ items }) {
  const current = 1;
  return (
    <div>
      <Banner item={items[current]} />
      <div>
        <PrevButton />
        <Indicators count={items.length} currentIndex={current} />
        <NextButton />
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

function Indicators({ count, current, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        onClick={() => onSelect(i)}
        style={{ backgroundColor: i === current ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
