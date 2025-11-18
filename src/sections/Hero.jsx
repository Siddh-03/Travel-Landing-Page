import React from "react";
import { Play } from "lucide-react";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-blob-container">
        <img src="/images/Decore.png" alt="" className="hero-blob-img" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="tagline">Best Destinations around the world</span>

          <h1 className="headline">
            Travel, <span className="highlight">enjoy</span> and live a new and
            full life
          </h1>

          <p className="subtext">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="hero-buttons">
            <button className="btn-cta">Find out more</button>
            <button className="btn-play">
              <div className="play-icon">
                <Play size={15} fill="white" />
              </div>
              Play Demo
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/images/Image.png" alt="Traveler" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
