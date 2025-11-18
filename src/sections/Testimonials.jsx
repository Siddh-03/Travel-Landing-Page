import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./styles/Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/testimonials");
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 2. Handle Navigation
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  if (loading)
    return <div className="text-center py-20">Loading reviews...</div>;

  // Logic to determine which cards to show
  const activeItem = testimonials[currentIndex];
  // Get the next item for the background, or loop to start if at end
  const nextItemIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  const backItem = testimonials[nextItemIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* --- Left Side --- */}
        <div className="testi-content">
          <span className="testi-subtitle">TESTIMONIALS</span>
          <h2 className="testi-title">What People Say About Us.</h2>

          {/* Dots Pagination */}
          <div className="dots-container">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* --- Right Side (Cards) --- */}
        <div className="testi-cards-wrapper">
          <div className="card-stack">
            {/* BACKGROUND CARD (Visual only - shows the next person) */}
            {backItem && (
              <div className="testi-card back-card">
                <div className="testi-quote">"{backItem.message}"</div>
                <h4 className="testi-name">{backItem.name}</h4>
                <p className="testi-role">{backItem.role}</p>
              </div>
            )}

            {/* FOREGROUND CARD (Active) */}
            {activeItem && (
              <div className="testi-card active-card">
                {/* Avatar overlapping top-left */}
                <img
                  src={activeItem.avatar}
                  alt={activeItem.name}
                  className="testi-avatar"
                />

                <div className="testi-quote">"{activeItem.message}"</div>
                <h4 className="testi-name">{activeItem.name}</h4>
                <p className="testi-role">{activeItem.role}</p>
              </div>
            )}

            {/* Navigation Arrows (Absolute positioned on right) */}
            <div className="arrows-container">
              <div className="arrow-btn" onClick={handlePrev}>
                <ChevronUp
                  size={24}
                  color={currentIndex === 0 ? "#BCB7C2" : "#3E2E4D"}
                />
              </div>
              <div className="arrow-btn" onClick={handleNext}>
                <ChevronDown size={24} color="#3E2E4D" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
