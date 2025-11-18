import React, { useState } from "react";
import "./styles/Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // 1. Simple Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // 2. POST Request to json-server
    try {
      const response = await fetch("http://localhost:4000/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing! 🚀");
        setEmail("");
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.error("Newsletter Error:", error);
      setStatus("error");
      setMessage("Failed to subscribe. Is the server running?");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="send-icon-decor">
          <img src="images/Group 77.png" alt="" />
        </div>
        <div className="newsletter-box">
          <img
            src="/images/Mask Group.png"
            alt=""
            className="decor-ring ring-left"
          />
          <img
            src="/images/Group 42.png"
            alt=""
            className="decor-ring ring-right"
          />


          <h2 className="newsletter-title">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <img
                src="images/Group 46.png"
                alt="Mail Icon"
                className="mail-icon"
              />
              <input
                placeholder="Your email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn-subscribe"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Subscribe"}
            </button>
          </form>

          {message && <p className={`status-message ${status}`}>{message}</p>}
        </div>
    
        <div className="plus-decor-bottom">
          <img src="/images/Group 5.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
