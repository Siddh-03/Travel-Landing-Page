import React, { useState, useEffect } from "react";
import { Navigation } from "lucide-react"; 
import "./styles/Destinations.css";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/destinations");
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="destinations-section" id="destinations">
      <div className="destinations-container">
        {/* Header */}
        <div className="destinations-header">
          <span className="sub-title">Top Selling</span>
          <h2 className="main-title">Top Destinations</h2>
        </div>

        {/* Loading State */}
        {loading && (
          <div
            style={{ textAlign: "center", fontSize: "20px", color: "#5E6282" }}
          >
            Loading deals...
          </div>
        )}

        {/* Cards Grid */}
        {!loading && (
          <div className="destinations-grid">
            {destinations.map((destination) => (
              <div className="destination-card" key={destination.id}>
                {/* Image */}
                <div className="card-image-wrapper">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="dest-img"
                  />
                </div>

                {/* Info */}
                <div className="card-content">
                  <div className="card-row">
                    <span>{destination.city}</span>
                    <span>{destination.price}</span>
                  </div>

                  <div className="duration-row">
                    <Navigation
                      size={16}
                      fill="black"
                      color="black"
                      style={{ transform: "rotate(45deg)" }}
                    />
                    <span>{destination.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="spring-decor"></div>
      </div>
    </section>
  );
};

export default Destinations;
