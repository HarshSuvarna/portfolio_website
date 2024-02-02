import React from "react";
import "./navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Pdf from "../../public/files/harshsuvarnaCV.pdf";
function Navbar() {
  return (
    <ul className="navbar-container">
      <li className="tab">
        <AnchorLink offset="-60" href="#projects">
          Projects
        </AnchorLink>
      </li>
      <li className="tab">
        <AnchorLink offset="-60" href="#recommendations">
          Recommendations
        </AnchorLink>
      </li>
      <li className="tab">
        <AnchorLink offset="175" href="#skills">
          Skills
        </AnchorLink>
      </li>
      <li className="tab">
        <AnchorLink href="#experience">Experience</AnchorLink>
      </li>
      <li className="tab">
        <AnchorLink href="#contact">Contact</AnchorLink>
      </li>
      <li className="tab">
        <a href={Pdf} target="_blank">
          Download CV
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
