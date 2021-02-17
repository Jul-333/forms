import React from "react";
import "./Checkbox.css";

const Checkbox = ({ onChange, onBlur, errorObj, value }) => {
  const addError = (errorObj) => {
    const { messageSmall, messageBig } = errorObj;
    return (
      <div className="arrow-error">
        <p className="error-small-message">{messageSmall}</p>
        <p className="error-big-message">{messageBig}</p>
      </div>
    );
  };

  const hasError = errorObj.error;

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        className="custom-checkbox"
        id="checkbox"
        name="checkbox"
        value={value}
        onChange={(event) => {
          onChange(event);
        }}
        onBlur={(event) => {
          onBlur(event);
        }}
      ></input>
      <label htmlFor="checkbox">
        Примите{" "}
        <pre>
          <a href="#"> пользовательское соглашение</a>
        </pre>
      </label>
      {hasError ? addError(errorObj) : null}
    </div>
  );
};
export default Checkbox;
