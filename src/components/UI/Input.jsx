import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  return (
    <input
      className={`"input" ${props.className} ${isFocused ? "focus" : ""} ${
        props.error ? "error" : ""
      }`}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      min={0}
      onChange={props.onChange}
      onFocus={focusHandler}
      onBlur={blurHandler}
    />
  );
};

export default Input;
