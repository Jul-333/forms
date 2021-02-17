import React from "react";
import "./Button.css";

const Button = ({ disabled, nameButton }) => {
  return (
    <button type="submit"  disabled={disabled} className="button-submit">
      {nameButton}
    </button>
  );
};

export default Button;
