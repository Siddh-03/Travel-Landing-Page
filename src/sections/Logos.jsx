import React from 'react';
import './styles/Logos.css';

const Logos = () => {
  // Placeholder data
  const logos = [
    { id: 1, name: "Axon", src: "/images/logos/axon.png" },
    { id: 2, name: "Jetstar", src: "/images/logos/jetstar.png" },
    { id: 3, name: "Expedia", src: "/images/logos/expedia.png" },
    { id: 4, name: "Qantas", src: "/images/logos/qantas.png" },
    { id: 5, name: "Alitalia", src: "/images/logos/alitalia.png" }
  ];

  return (
    <section className="logos-section">
      <div className="logos-container">
        {logos.map((logo) => (
          <div key={logo.id} className="logo-item">
            <img 
              src={logo.src} 
              alt={`${logo.name} Logo`} 
              className="logo-img"
              onError={(e) => {
                e.target.style.display = 'none'; 
                e.target.parentNode.innerText = logo.name; 
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;