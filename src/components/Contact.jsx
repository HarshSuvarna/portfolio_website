import React from "react";
import "./contact.css";
import Pdf from "../../public/files/harshsuvarnaCV.pdf";
function Contact() {
  const emailUrl = `mailto:harsh.suvarna9962@gmail.com?subject=${"Website"}&body=${"Hi Harsh,"}`;
  const whatsappUrl = `https://wa.me/+447741875686?text=${"Hi Harsh"}`;
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="upper-container">
          <div className="upper-left">
            <p style={{ fontSize: "35px" }}>Harsh Suvarna</p>
            <a style={{ color: "#d0d0d0" }} href={Pdf} target="_blank">
              <button>Download my CV</button>
            </a>
          </div>
          <div className="upper-right">
            <div className="box">
              <p className="heading-color">Contact</p>
              <p onClick={() => window.open(whatsappUrl)}>Whatsapp</p>
              <p onClick={() => window.open(emailUrl)}>Email</p>
            </div>
            <div className="box flex">
              <p className="heading-color">Socials</p>
              <span>
                <p
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/harsh-suvarna-a8220a14b/",
                      "_blank",
                      "noreferrer"
                    )
                  }
                >
                  <i className="fa-brands fa-linkedin"></i>
                </p>
                <p
                  onClick={() =>
                    window.open(
                      "https://github.com/HarshSuvarna",
                      "_blank",
                      "noreferrer"
                    )
                  }
                >
                  <i className="fa-brands fa-github"></i>
                </p>
                <p
                  onClick={() =>
                    window.open(
                      "https://medium.com/@harsh.suvarna0 ",
                      "_blank",
                      "noreferrer"
                    )
                  }
                >
                  <i className="fa-brands fa-medium"></i>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="below-container">
          <p className="send-email heading-color">Send an Email</p>
          <p className="email" onClick={() => window.open(emailUrl)}>
            harsh.suvarna9962
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
