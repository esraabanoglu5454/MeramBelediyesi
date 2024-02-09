import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Meram 
                    <i className="fa-solid fa-school"/>
                </Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Ana Sayfa
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/kurum" className='nav-links' onClick={closeMobileMenu}>
                        Kurumsal
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/egitim" className='nav-links' onClick={closeMobileMenu}>
                        Eğitim
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/iletisim" className='nav-links' onClick={closeMobileMenu}>
                        İletişim
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/kayit" className='nav-links-mobile' onClick={closeMobileMenu}>
                        Kayıt Ol
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn-outline' >Kayıt Ol</Button>} 
        </nav>
    </>
  )
}

export default Navbar