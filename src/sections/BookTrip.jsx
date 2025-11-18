import React from "react";
import { Map, Send, Leaf, Building2, Heart } from "lucide-react"; 
import "./styles/BookTrip.css";

const BookTrip = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      iconClass: "icon-yellow",
      icon: <img src="images/Group 7.jpg" alt="destination" />,
    },
    {
      id: 2,
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      iconClass: "icon-red",
      icon: <img src="images/Group 11.jpg" alt="payment" />,
    },
    {
      id: 3,
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      iconClass: "icon-blue",
      icon: <img src="images/Group 12.jpg" alt="airport" />,
    },
  ];

  return (
    <section className="book-section">
      <div className="book-container">
        {/* --- Left Side: Text & Steps --- */}
        <div className="book-content">
          <span className="book-subtitle">Easy and Fast</span>
          <h2 className="book-title">Book Your Next Trip In 3 Easy Steps</h2>

          <div className="steps-list">
            {steps.map((step) => (
              <div className="step-item" key={step.id}>
                {/* Icon Box */}
                <div className={`step-icon-box ${step.iconClass}`}>
                {step.icon}
                </div>

                {/* Text */}
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Side: The "Trip to Greece" Card --- */}
        <div className="book-image-wrapper">
          {/* Main Card */}
          <div className="trip-card">
            <img
              src="images/steps.jpg"
              alt="Greece Trip"
              className="trip-img"
            />

            <h3 className="trip-title">Trip To Greece</h3>
            <p className="trip-date">14-29 June | by Robbin joseph</p>

            {/* 3 Small Icons */}
            <div className="trip-icons">
              <div className="icon-circle">
                <Leaf size={16} color="#5E6282" />
              </div>
              <div className="icon-circle">
                <Map size={16} color="#5E6282" />
              </div>
              <div className="icon-circle">
                <Send size={16} color="#5E6282" />
              </div>
            </div>

            <div className="trip-footer">
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>24 people going</span>
              </div>
              <Heart size={20} color="#5E6282" />
            </div>

            {/* Floating "Ongoing" Card (Overlapping) */}
            <div className="floating-card">
              <img src="images/steps 2.jpg" alt="Rome" className="float-img" />

              <div className="float-content">
                <h5>Ongoing</h5>
                <h4>Trip to rome</h4>
                <div className="flex mb-2">
                  <span className="text-black font-medium">40%</span>
                  <span className="text-[#84829A] ml-1">completed</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
