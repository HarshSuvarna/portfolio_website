import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <ul className="navbar-container">
      <li className="tab">Projects</li>
      <li className="tab">Recommendations</li>
      <li className="tab">Skills</li>
      <li className="tab">Contact</li>
    </ul>
  );
}

export default Navbar;
