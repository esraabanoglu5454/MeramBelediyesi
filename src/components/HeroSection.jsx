import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>MERAM HALKIMIZ İÇİN ÇALIŞIYOR</h1>
      <p>Meram Belediyesi</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/egitim' className='btn-mobile'>
            <span className="egitimler-text">Eğitimler</span>
          </Link>
          
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          İzle <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;