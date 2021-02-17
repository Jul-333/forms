import React from "react";
import "./Select.css";
import Select from "react-select";

const SELECT_OPTIONS = [
  { value: "Belarus", label: "Беларусь" },
  { value: "Russia", label: "Россия" },
  { value: "Kazakhstan", label: "Казахстан" },
];

const SelectEl = ({ value, onChange, labelName, onBlur, errorObj }) => {
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
    <label>
      {labelName}
      <br />
      <div className="wrapper-input select" onBlurCapture={onBlur}>
        <Select
          onBlur={() => {
            onBlur("region");
          }}
          placeholder={"Регион"}
          options={SELECT_OPTIONS}
          onChange={(event) => {
            onChange(event);
          }}
        />

        <input
          onChange={(event) => {
            onChange(event);
          }}
          tabIndex={-1}
          autoComplete="off"
          className="falseInput"
          value={value}
        />
        {hasError ? addError(errorObj) : null}
      </div>
    </label>
  );
};

export default SelectEl;
