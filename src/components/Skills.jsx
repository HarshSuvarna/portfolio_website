import React from "react";
import "./skills.css";
import { motion } from "framer-motion";
function Skills() {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
        duration: 4,
      },
    },
  };
  const item = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div id="skills">
        <span>
          <p>Skills</p>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="description"
          >
            I am an enthusiastic learner who believes in continuous learning.
            Here are the tools and technologies I've worked with as a
            professional, hobbiest and a student
          </motion.p>
        </span>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 3, type: "tween" }}
          className="description-slills-container"
        >
          <motion.ul
            variants={item}
            transition={{ duration: 1, type: "tween" }}
          >
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>API/JSON</li>
            <li>MongoDB</li>
            <li>HTML/CSS</li>
          </motion.ul>

          <motion.ul
            variants={item}
            transition={{ duration: 0.8, type: "tween" }}
          >
            <li>AWS</li>
            <li>Git</li>
            <li>Docker</li>
            <li>GCP</li>
            <li>React</li>
            <li>FastApi</li>
            <li>NestJs</li>
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
