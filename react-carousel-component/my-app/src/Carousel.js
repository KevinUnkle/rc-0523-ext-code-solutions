import React, { useEffect, useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import './Carousel.css';

export default function Carousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
  };

  const previousImage = () => {
    const previousIndex = (imageIndex - 1 + images.length) % images.length;
    setImageIndex(previousIndex);
  };

  useEffect(() => {
    const timeoutHandle = setTimeout(nextImage, 3000);
    return () => clearTimeout(timeoutHandle);
  }, [imageIndex]);

  return (
    <div className="carousel">
      <PrevButton onClick={previousImage} />
      <NextButton onClick={nextImage} />
      <Image image={images[imageIndex]} />
      <Dots
        numDots={images.length}
        activeIndex={imageIndex}
        onClick={(i) => setImageIndex(i)}
      />
    </div>
  );
}

function NextButton({ onClick }) {
  return (
    <FaChevronRight onClick={onClick} className="next-image" size="2rem" />
  );
}

function PrevButton({ onClick }) {
  return (
    <FaChevronLeft onClick={onClick} className="previous-image" size="2rem" />
  );
}

function Image({ image }) {
  const { src, alt } = image;
  return (
    <div className="image-wrapper">
      <img className="current-image" src={src} alt={alt} />
      <h2 className="image-caption">{alt}</h2>
    </div>
  );
}

function Dots({ numDots, activeIndex, onClick }) {
  const images = [];
  for (let i = 0; i < numDots; i++) {
    const Icon = i === activeIndex ? FaCircle : FaRegCircle;
    images.push(<Icon onClick={() => onClick(i)} className="progress-dot" />);
  }
  return <div className="progress-dots">{images}</div>;
}
