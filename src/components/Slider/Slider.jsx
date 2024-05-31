import React, { useState } from 'react'
import "./Slider.scss"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/westOutlined';

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg",
        "https://images.pexels.com/photos/6322920/pexels-photo-6322920.jpeg",
        "https://images.pexels.com/photos/5558228/pexels-photo-5558228.jpeg",
    ];

const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};
const nextSlide = () => {
  setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};

  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
