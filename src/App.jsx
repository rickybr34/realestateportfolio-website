import { useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Construction from './components/Construction';
import Sold from './components/Sold';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <div 
          id="home" 
          className="hero-section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div className="hero-content">
            <h1 className="hero-title">Builder & Management Corp.</h1>
            <p className="hero-subtitle">We build, we finance, and we close the deal.</p>
            <p className="hero-subtitle">Licensed GC • Real Estate Broker • Mortgage Broker • Attorney</p>
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)}>
          <About />
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <Construction />
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)}>
          <Sold />
        </div>
        <div ref={(el) => (sectionsRef.current[4] = el)}>
          <Contact />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 Builder & Management Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
