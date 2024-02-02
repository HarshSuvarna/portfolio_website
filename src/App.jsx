import React, { useEffect, useRef, useState } from "react";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";
import { useLayoutEffect } from "react";
import "./app.css";
import ExperienceAndEducation from "./components/ExperienceAndEducation";

function App() {
  const [showTopButton, setShowTopButton] = useState();
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopButton(true);
      } else setShowTopButton(false);
    });
  }, []);
  return (
    <>
      <TopButton showTopButton={showTopButton} />
      <Navbar />
      <Landing />
      <Projects />
      <Reviews />
      <Skills />
      <ExperienceAndEducation />
      <Contact />
      {/* experience certificates */}
    </>
  );
}

export default App;
