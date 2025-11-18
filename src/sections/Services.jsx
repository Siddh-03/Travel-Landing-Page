import React from "react";
import "./styles/Services.css";

const servicesData = [
  {
    id: 1,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "/images/Group 48.png",
  },
  {
    id: 2,
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "/images/Group 51.png",
  },
  {
    id: 3,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: "/images/Group 50.png",
  },
  {
    id: 4,
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
    icon: "/images/Group 49.png",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="plus-group-container">
          <img src="/images/Group 4.png" alt="" />
        </div>

        {/* Header */}
        <div className="services-header">
          <span className="services-category">CATEGORY</span>
          <h2 className="services-title">We Offer Best Services</h2>
        </div>

        {/* Grid Cards */}
        <div className="services-grid">
          {servicesData.map((item) => (
            <div className="service-card" key={item.id}>
              {/* Icon Placeholder Area */}
              <div className="icon-placeholder">
                <img src={item.icon} alt={item.title} className="service-img" />
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
