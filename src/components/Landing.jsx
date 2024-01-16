import React, { useEffect, useState } from "react";
import "./landing.css";
function Landing() {
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
  return (
    <div className="landing-page">
      <div className="name-description-container">
        <p className="name">Harsh </p>
        <p className="name">Suvarna</p>
        <p className="description">
          Hello there, I am Harsh, a 24-year-old passionate Software Developer,
          based in the United Kingdom. Currently I am persuing Masters degree in
          Information Technology at University of Glasgow. I have 1.5 years of
          professional experience. I have been coding since {year} years {month}{" "}
          months {day}
          &nbsp;days {minutes} minutes {seconds} seconds.
        </p>
      </div>
      <div className="image-container">
        <img src="/images/harshImg2.jpg" alt="" />
      </div>
    </div>
  );
}

export default Landing;
