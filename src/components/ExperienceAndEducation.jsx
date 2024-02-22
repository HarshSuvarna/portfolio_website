import "./experienceAndEducation.css";
import { educationAndExperience } from "../../contants";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EY from "../../public/files/EY_IME.pdf";
import SDCC from "../../public/files/SDCC_Finalist.pdf";

function ExperienceAndEducation() {
  const [experience, setexperience] = useState([
    {
      year: "Sep 2023 - Current",
      orgName: "Universtiy of Glasgow",
      role: "MSc. Information Technology",
      image: "/images/UofG_t.jpg",
      description:
        "Currently pursuing an MSc in Information Technology (since September 2023) with a predicted distinction. Engaging in coursework covering Software Development, Internet Technology, Advanced Programming, Algorithms, and Data Structures. The program enhances both technical proficiency and collaborative teamwork through project-based learning.",
    },
    {
      year: "Aug 2022 - Jul 2023",
      orgName: "Code B Solutions",
      role: "Software Engineer",
      image: "/images/codeB.svg",
      description:
        "At Code B I developed full-stack applications using React, Svelte, ExpressJs, NestJs, Fast API, MongoDB, and MySQL. Developed applications with 50+ fields for UK and US clients. Notable achievements include real-time interactive features, CLI applications, and leveraging Puppeteer for web automation, resulting in substantial viewership and revenue growth.",
    },
    {
      year: "Jul 2021 - Jan 2022",
      orgName: "Ernst & Young",
      role: "Analyst in Business Consulting",
      image: "/images/EY_t.png",
      description: (
        <p>
          At an Analyst in EY, I conducted concurrent audits on banking
          products, including RTGS and NEFT, identifying loopholes and
          streamlining processes. Achieved a 60% audit time reduction using EY
          Digicube. Conducted planned and surprise audits across diverse
          locations, recommending critical changes, such as storing welcome kits
          in fireproof locked cabinets, adopted nationwide based on my findings.
          Earned the{" "}
          <a
            href={EY}
            target="_blank"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            "EY 'I am Exceptional' award"
          </a>{" "}
          for displaying outstanding and innovative intellectual contributions.
        </p>
      ),
    },
    {
      year: "Jul 2017 - Jun 2021",
      orgName: "University of Mumbai",
      role: "B.E. Instrumentation",
      image: "/images/MU.jpg",
      description: (
        <p>
          As a Engineering Student, I focused on critical subjects like
          Structured Programming Approach, Database Management Systems, and
          Object-Oriented Programming, achieving first-class honors. Attended
          coding language workshops and competitions, organized events as the
          Public Relations executive for the Entrepreneurship Cell, and earned
          finalist status in the{" "}
          <a
            href={SDCC}
            target="_blank"
            style={{
              color: "black",
              textDecoration: "none",
              margin: "0",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            "Solar Decathlon India 2020-2021",&nbsp;
          </a>
          competing against 100+ nationwide teams.
        </p>
      ),
    },
  ]);
  const [image, setImage] = useState(experience[0]?.image);
  const [description, setDescription] = useState(experience[0]?.description);
  return (
    <div id="experience">
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className="title"
      >
        <p>Experience & Education</p>
      </motion.div>
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
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="image-description-container"
        >
          <div className="image-container-exp">
            <img src={image} alt="" />
          </div>
          <div>{description}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExperienceAndEducation;
