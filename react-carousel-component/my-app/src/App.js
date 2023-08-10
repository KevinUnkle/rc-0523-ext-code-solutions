import './App.css';
import Carousel from './Carousel';

const images = [
  {
    src: '/images/pikachu.png',
    alt: 'Pikachu',
  },
  {
    src: '/images/ash.png',
    alt: 'Ash',
  },
  {
    src: '/images/charmander.png',
    alt: 'Charmander',
  },
  {
    src: '/images/bulbasaur.png',
    alt: 'Bulbasaur',
  },
  {
    src: '/images/squirtle.png',
    alt: 'Squirtle',
  },
];

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
