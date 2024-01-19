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
  // useLayoutEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     new LocomotiveScroll();
  //   })();
  // }, []);
  return (
    <>
      <TopButton />
      <Navbar />
      <Landing />
      {/* <Projects /> */}
      {/* <Reviews /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* experience certificates */}
    </>
  );
}

export default App;
