import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="left-container">
        <div className="project-title">Projects</div>
        <div className="project">
          <div className="project-title-img">
            <img src="images/butik.png" alt="" />
            <div className="project-name-description">
              <p>
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
      <div className="right-container">
        <div className="project">
          <div className="project-title-img">
            <img src="images/mpc.png" alt="" />
            <div className="project-name-description">
              Using Model Predictive Controller, a car drives itself to the
              parking spot avoiding the obstacle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
