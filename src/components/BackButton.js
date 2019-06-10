import React from "react";
import PropTypes from "prop-types";

const BackButton = props => {
  return (
    <button className="backButton" onClick={props.handleClick}>
      BACK
    </button>
  );
};

BackButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default BackButton;
