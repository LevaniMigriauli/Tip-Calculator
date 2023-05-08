import React, { useState } from "react";
import "./Input.css";

const Input = ({
  className,
  error,
  // invalidInputText,
  label,
  onChange,
  type,
  value,
  placeholder,
  img,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  const labelisRendered = label && <label className="label">{label}</label>;
  const errorText = error ? <span className="error-text">{error}</span> : "";

  const backgroundImage = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 19px top 50%",
  };

  // console.log(error);

  return (
    <>
      <div className="input-header">
        {labelisRendered}
        {errorText}
      </div>
      <input
        className={`input ${className} ${isFocused ? "focus" : ""} ${
          error ? "error" : ""
        }`}
        style={backgroundImage}
        type={type}
        placeholder={placeholder}
        value={value}
        min={0}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
    </>
  );
};

export default Input;
