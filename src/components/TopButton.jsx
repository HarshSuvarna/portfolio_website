import React from "react";
import "./topButton.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function TopButton({ showTopButton }) {
  return (
    <AnchorLink offset="60" href="#landing-page">
      <div className={`top ${!showTopButton && "hide"}`}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </AnchorLink>
  );
}

export default TopButton;
