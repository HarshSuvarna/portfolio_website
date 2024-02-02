import "./experienceAndEducation.css";
import { educationAndExperience } from "../../contants";
import React, { useState } from "react";

function ExperienceAndEducation() {
  const [experience, setexperience] = useState(educationAndExperience);
  const [image, setImage] = useState(experience[0]?.image);
  const [description, setDescription] = useState(experience[0]?.description);
  return (
    <div id="experience">
      <div className="title">
        <p>Experience & Education</p>
      </div>
      <div className="exp-img-container">
        <div className="exp-edu-parent">
          {(experience || []).map((e) => (
            <div
              className="exp-edu-container"
              onMouseOver={() => {
                setImage(e.image);
                setDescription(e.description);
              }}
              key={e.year}
            >
              <div className="year-div">{e.year}</div>
              <div className="org-name-div">{e.orgName}</div>
              <div className="role">{e.role}</div>
            </div>
          ))}
        </div>
        <div className="image-description-container">
          <div className="image-container-exp">
            <img src={image} alt="" />
          </div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAndEducation;
