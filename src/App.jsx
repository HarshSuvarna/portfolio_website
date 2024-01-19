import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";
import { useEffect, useLayoutEffect, useRef } from "react";
import "./app.css";

function App() {
  useLayoutEffect(() => {});
  const imgRef = useRef(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <TopButton />
      <Navbar />
      <Landing reference={imgRef} />
      <Projects />
      <Reviews />
      <Skills />
      <Contact />
      {/* experience certificates */}
    </>
  );
}

export default App;
