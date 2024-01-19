import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact-parent">
      <div className="contact-container">
        <div className="upper-container">
          <div className="upper-left">
            <p style={{ fontSize: "35px" }}>Harsh Suvarna</p>
            <button>Download my resume</button>
          </div>
          <div className="upper-right">
            <div className="box">
              <p className="heading-color">Contact</p>
              <p>Whatsapp</p>
              <p>Email</p>
            </div>
            <div className="box flex">
              <p className="heading-color">Socials</p>
              <span>
                <p>
                  <i className="fa-brands fa-linkedin"></i>
                </p>
                <p>
                  <i className="fa-brands fa-github"></i>
                </p>
                <p>
                  <i className="fa-brands fa-medium"></i>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="below-container">
          <p className="send-email heading-color">Send an Email</p>
          <p className="email">harsh.suvarna9962</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
