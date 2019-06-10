import React from "react";
import skiddleLogo from "../images/skiddle-logo-white-stacked.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="logoContainer">
      <Link to="/">
        <img src={skiddleLogo} alt="Skiddle Logo" id="skiddleLogoWhite" />
      </Link>
    </div>
  );
};

export default Header;
