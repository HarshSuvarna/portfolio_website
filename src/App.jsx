import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// import LocomotiveScroll from "locomotive-scroll";
import "./app.css";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();
  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector("data-scroll-container"),
  //   smooth: true,
  // });
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
