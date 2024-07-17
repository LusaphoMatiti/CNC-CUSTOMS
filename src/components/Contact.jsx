import React from "react";
import { socialLinks } from "../data";

const Contact = () => {
  return (
    <section className="contact section">
      <div className="section-title">
        <h2>
          Contact <span>Us</span>
        </h2>
      </div>
      <div className="section-center">
        <div className="contact-info">
          <h3>Our Location</h3>
          <p>Unit 2, 30 Gemini Street Brackenfell Industria</p>
          <h3>Phone Number</h3>
          <p>083 278 9914</p>
          <ul className="contact-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              if (icon === "fas fa-envelope") {
                return (
                  <li key={id}>
                    <a
                      href={`mailto:clint@cnccustoms.co.za`}
                      className="contact-icon"
                      rel="noopener noreferrer"
                    >
                      <i className={icon}></i>
                    </a>
                  </li>
                );
              }
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    className="contact-icon"
                    rel="noopener noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/{your-form-id}" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
