import React, { useEffect, useRef } from "react";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";
import { useLayoutEffect } from "react";
import "./app.css";

function App() {
  const landingRef = useRef(null);
  const projectsRef = useRef(null);
  const reviewsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    // Initialize Locomotive Scroll
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  const scrollToSection = (ref) => {
    console.log("clicke", ref);
    // if (ref && ref.current) {
    projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <>
      <TopButton />
      <Navbar
        onProjectsClick={() => scrollToSection(projectsRef)}
        onReviewsClick={() => scrollToSection(reviewsRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Landing reference={landingRef} />
      <Projects reference={projectsRef} />
      <Reviews reference={reviewsRef} />
      <Skills reference={skillsRef} />
      <Contact reference={contactRef} />
      {/* experience certificates */}
    </>
  );
}

export default App;
