import React from "react";
import "./skills.css";
function Skills() {
  return (
    <>
      <div className="skill-container">
        <span>
          <p>Skills</p>
          <p className="description">
            I am an enthusiastic learner and believe in continuous learning.
            Here are a few toots and technologies I've worked with as a
            professional, hobbiest and a student
          </p>
        </span>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Python</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>API/JSON</li>
          <li>MongoDB</li>
          <li>HTML/CSS</li>
        </ul>

        <ul>
          <li>AWS</li>
          <li>Git</li>
          <li>Docker</li>
          <li>GCP</li>
          <li>React</li>
          <li>FastApi</li>
          <li>NestJs</li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
