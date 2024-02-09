import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Videoları ve şehrimize yapacağımız güzel gelişmelerden haber almak istiyorsanız takipte kalın.
        </p>
        <p className='footer-subscription-text'>
          Sizi aramızda görmek istiyoruz.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline'>Kayıt ol</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>İletişime Geç:</h2>
            <p className='p'>
              Meram Belediyesi Çözüm Merkezi 
            444 3 042
            </p>
            <h2>Yol Tarifi:</h2>
            <p className='p'>Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram / KONYA</p>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              MERAM
              <i className='fa-solid fa-school' />
            </Link>
          </div>
          <small className='website-rights'>MERAM © 2024</small>
          <div className='social-icons'>
          <a className='a' href="https://www.linkedin.com/company/uretkenakademi/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a className='a' href="https://www.instagram.com/meram.belediyesi/" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram' />
          </a>
          <a className='a' href="https://www.youtube.com/@merambelediyesi" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-youtube' />
          </a>  
          <a className='a' href="https://twitter.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-x' />
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;