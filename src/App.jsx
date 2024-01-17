import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./app.css";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";
import { useEffect } from "react";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();
  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector("data-scroll-container"),
  //   smooth: true,
  // });

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div data-scroll-container>
      <TopButton />
      <Navbar />
      <Landing />
      <Projects />
      <Reviews />
      <Skills />
      <Contact />
      {/* experience download my resume certificates contact me */}
    </div>
  );
}

export default App;
