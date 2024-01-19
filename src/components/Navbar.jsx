import React from "react";
import "./navbar.css";

function Navbar({
  onProjectsClick,
  onReviewsClick,
  onSkillsClick,
  onContactClick,
}) {
  return (
    <ul className="navbar-container">
      <li onClick={() => onProjectsClick()} className="tab">
        Projects
      </li>
      <li onClick={onReviewsClick()} className="tab">
        Recommendations
      </li>
      <li onClick={onSkillsClick()} className="tab">
        Skills
      </li>
      <li onClick={onContactClick()} className="tab">
        Contact
      </li>
    </ul>
  );
}

export default Navbar;
