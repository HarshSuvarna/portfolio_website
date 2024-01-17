import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";
import { useEffect } from "react";

function App() {
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
      <Landing />
      <Projects />
      <Reviews />
      <Skills />
      <Contact />
      {/* experience download my resume certificates contact me */}
    </>
  );
}

export default App;
