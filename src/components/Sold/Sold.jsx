import './Sold.css';

const Sold = () => {
  const properties = [
    {
      // If you want to change the price, you can change the price here
      price: "$2,450,000",
      // If you want to change the specs, you can change the specs here
      specs: "4 Beds | 3 Baths | 3,200 sq ft",
      // If you want to change the address, you can change the address here
      address: "1234 Ocean Drive, Malibu, CA",
      // If you want to change the achievement, you can change the achievement here
      achievement: "Closed in 14 Days",
      // If you want to change the image, you can change the image here (make sure to update the image in the image folder)
      image: "/images/sold/property-1.jpg" 
    },  
    {
      // If you want to change the price, you can change the price here
      price: "$1,850,000",
      // If you want to change the specs, you can change the specs here
      specs: "3 Beds | 2.5 Baths | 2,400 sq ft",
      // If you want to change the address, you can change the address here
      address: "5678 Sunset Blvd, Beverly Hills, CA",
      achievement: "New Record for Street",
      // If you want to change the image, you can change the image here (make sure to update the image in the image folder)
      image: "/images/sold/property-2.jpg"
    },
    {
      price: "$3,200,000",
      // If you want to change the specs, you can change the specs here
      specs: "5 Beds | 4 Baths | 4,500 sq ft",
      // If you want to change the address, you can change the address here
      address: "9012 Hillcrest Ave, Los Angeles, CA",
      achievement: "Above Asking Price",
      // If you want to change the image, you can change the image here (make sure to update the image in the image folder)
      image: "/images/sold/property-3.jpg"
    },
    {
      price: "$1,650,000",
      specs: "3 Beds | 2 Baths | 2,100 sq ft",
      address: "3456 Pacific Coast Hwy, Santa Monica, CA",
      achievement: "Quick Close - 10 Days",
      // If you want to change the image, you can change the image here (make sure to update the image in the image folder)
      image: "/images/sold/property-4.jpg"
    }
  ];

  return (
    <section id="sold" className="sold-section">
      <div className="sold-container">
        <h2 className="section-title">Properties Sold</h2>
        <div className="properties-grid">
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <div className="property-image-container">
                <img 
                  src={property.image} 
                  alt={property.address}
                  className="property-image"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="property-image-placeholder" style={{ display: 'none' }}>
                  <span>Property Image</span>
                </div>
              </div>
              <div className="property-info">
                <div className="property-price">{property.price}</div>
                <div className="property-specs">{property.specs}</div>
                <div className="property-address">{property.address}</div>
                <div className="property-achievement">
                  <span className="achievement-badge">{property.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sold;

