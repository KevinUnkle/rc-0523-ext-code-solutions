export default function CustomButton({ text, color, onCustomClick }) {
  function handleClick() {
    alert(`Button ${text} clicked!`);
  }
  return (
    <button
      onClick={() => onCustomClick(text)}
      style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
