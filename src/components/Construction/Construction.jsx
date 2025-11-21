import './Construction.css';

// This is a list of projects that the company has worked on.
// This is where we will add the projects that the company has worked on.
// This is where you edit the projects that the company has worked on.
const Construction = () => {
  const projects = [
    {
      title: "Luxury Cardboard Box",
      location: "Broward County, FL | 2023",
      description: "7,500 sq ft custom luxury home build with premium finishes, smart home integration, and sustainable design features.",
      image: "/images/construction/construction-project-1.jpg"
    },
    {
      title: "Commercial Development",
      location: "Broward County, FL | 2024",
      description: "Mixed-use development project featuring retail spaces, offices, and residential units totaling 25,000 sq ft.",
      image: "/images/construction/construction-project-2.jpg"
    },
    {
      title: "Modern Renovation",
      location: "Broward County, FL | 2023",
      description: "Complete renovation of a 4,200 sq ft mid-century modern home, including structural updates and contemporary interior design.",
      image: "/images/construction/construction-project-3.jpg"
    }
  ];

  return (
    <section id="construction" className="construction-section">
      <div className="construction-container">
        <h2 className="section-title">Past Work: Construction</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="project-image-placeholder" style={{ display: 'none' }}>
                  <span>Project Image</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">{project.location}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Construction;

