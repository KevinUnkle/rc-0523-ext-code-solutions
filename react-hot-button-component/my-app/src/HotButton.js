import './HotButton.css';

export default function HotButton({ classTemp, onCustomClick }) {
  return (
    <button
      onClick={() => onCustomClick()}
      className={`hot-button ${classTemp}`}>
      Hot Button
    </button>
  );
}
