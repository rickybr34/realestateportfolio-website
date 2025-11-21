import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home">
            <img 
              src="/images/logo/logo.png" 
              alt="Builder & Management Corp. Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="logo-text">Builder & Management Corp.</span>
          </a>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#construction" onClick={closeMenu}>Construction</a>
          <a href="#sold" onClick={closeMenu}>Properties Sold</a>
          <a href="#quote" onClick={closeMenu}>Request Quote</a>
        </nav>
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

