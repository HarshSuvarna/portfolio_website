import React, { useEffect, useState } from "react";
import "./landing.css";
import "../app.css";
import { motion } from "framer-motion";

function Landing({ reference }) {
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  useEffect(() => {
    setTimeout(() => {
      let newTime = new Date();
      let curr_year = newTime.getFullYear();
      let curr_month = newTime.getMonth();
      let curr_day = newTime.getDate();
      let curr_minute = newTime.getMinutes();
      let curr_second = newTime.getSeconds();
      setDay(curr_day);
      setMonth(9 - curr_month);
      setMinutes(curr_minute);
      setSeconds(curr_second);
      setYear(curr_year - 2019);
      let currentTime =
        newTime.getHours().toString() +
        ":" +
        newTime.getMinutes().toString() +
        ":" +
        newTime.getSeconds().toString();
      setTime(currentTime);
    }, 1000);
  }, [time]);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div id="landing-page">
      <motion.div
        className="name-description-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 3, type: "tween" }}
      >
        <motion.p variants={item} className="name">
          Harsh
        </motion.p>
        <motion.p variants={item} className="name">
          Suvarna
        </motion.p>
        <motion.p variants={item} className="description">
          Hello there, I am Harsh, a 24-year-old passionate Software Developer,
          based in the London. Experienced Professional with a Masters Degree in
          Information Technology from the University of Glasgow, having 1.5
          years of corporate experience. I have been coding since {year}{" "}
          years {month} months {day}
          &nbsp;days {minutes} minutes {seconds} seconds.
        </motion.p>
      </motion.div>
      <div className="image-container" ref={reference}>
        <motion.img
          animate={{ opacity: 1, x: -50 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 1, delay: 1.5 }}
          src="/images/harshImg2.jpg"
          className="image-container-img"
        />
      </div>
    </div>
  );
}

export default Landing;
