import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/video-1.mp4';

function HeroSection() {
  const [isImageBackground, setImageBackground] = useState('false');
  const handleToggle = () => {
    setImageBackground(!isImageBackground);
  };

  return (
    <div>
      <div className='toggle'>
        <button onClick={handleToggle}>
          {isImageBackground ? 'Video' : 'Image'}
        </button>
      </div>
      <div
        className={
          isImageBackground
            ? 'hero-container remove-background'
            : 'hero-container'
        }>
        <video src={video} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
