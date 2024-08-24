import React, { useRef } from "react";
import "./projects.css";
import "../app.css";

function Projects() {
  return (
    <div id="projects">
      <div className="left-container">
        <div className="project-title">Projects</div>
        <div data-scroll data-scroll-speed="0.23" className="project">
          <div
            className="project-title-img"
            onClick={() =>
              window.open(
                "https://github.com/HarshSuvarna/Butik",
                "_blank",
                "noreferrer"
              )
            }
          >
            <img
              className="image-container invert"
              src="images/butik.png"
              alt=""
            />
            <div className="project-name-description">
              <p style={{ margin: "0" }}>
                Butik is a web app which helps you to browse shops near you and
                the products they have
              </p>
            </div>
          </div>
        </div>

        {/* <div className="project">
          <div className="project-title-img">
            <img src="images/spaceInvaders.png" alt="" />
            <div className="project-name-description">asdfasdf</div>
          </div>
        </div> */}
      </div>
      <div data-scroll data-scroll-speed="0.35" className="right-container">
        <div className="project">
          <div
            className="project-title-img"
            onClick={() =>
              window.open(
                "https://cybersafe-rose.vercel.app/home",
                "_blank",
                "noreferrer"
              )
            }
          >
            <img
              className="image-container"
              src="images/cybersafe.png"
              alt=""
            />
            <div className="project-name-description">
              Cybersafe helps you create and manage attack trees easily. Design
              strategies, collaborate securely, and visualize threats
              effectively with an intuitive, user-friendly interface.
            </div>
          </div>
        </div>
        <div className="project">
          <div
            className="project-title-img"
            onClick={() =>
              window.open(
                "https://github.com/HarshSuvarna/ModelPredictiveControl-Parking",
                "_blank",
                "noreferrer"
              )
            }
          >
            <img
              className="image-container invert"
              src="images/mpc.png"
              alt=""
            />
            <div className="project-name-description">
              Using Model Predictive Control action, a car drives itself to the
              parking spot avoiding the obstacle
            </div>
          </div>
        </div>
      </div>
      {/* <div
        data-scroll
        data-scroll-speed="0.1"
        className="right-container"
      ></div> */}
    </div>
  );
}

export default Projects;
