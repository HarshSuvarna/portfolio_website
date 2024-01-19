import React from "react";
import "./skills.css";
import { motion } from "framer-motion";
function Skills() {
  return (
    <>
      <div className="skill-container">
        <span>
          <p>Skills</p>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="description"
          >
            I am an enthusiastic learner who believes in continuous learning.
            Here are the tools and technologies I've worked with as a
            professional, hobbiest and a student
          </motion.p>
        </span>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="description-slills-container"
        >
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
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
