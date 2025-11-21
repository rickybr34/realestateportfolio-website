import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <div className="about-text">
            <p>
              // This is the about us section.
              // You can edit the text here to change the about us section.
              Builder & Management Corp. is Florida’s all-in-one real estate powerhouse. 
              With licenses in general contracting, real estate, lending, and law — we simplify your entire project from start to finish.
              Whether you’re flipping homes, building duplexes, or structuring commercial deals — we handle it all.
            </p>
          </div>
        </div>
        <div className="about-image">
          <img 
            src="/images/about/about-image.png" 
            alt="Builder & Management Corp. - Construction and Real Estate Services" 
            className="about-image-img"
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="image-placeholder" style={{ display: 'none' }}>
            <span>Builder & Management Corp. Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

