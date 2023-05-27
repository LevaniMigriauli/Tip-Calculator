import React from "react";
import "./Input.scss";

const Input = ({
  className,
  error,
  label,
  onChange,
  type,
  value,
  placeholder,
  img,
  noDot,
}) => {
  const labelisRendered = label && <label className="label">{label}</label>;
  const errorText = error ? <span className="error-text">{error}</span> : "";

  const backgroundImage = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 19px top 50%",
  };

  return (
    <>
      <div className="input-header">
        {labelisRendered}
        {errorText}
      </div>
      <input
        className={`input ${className} ${error ? "error" : ""}`}
        style={backgroundImage}
        type="number"
        placeholder={placeholder}
        value={value}
        min={0}
        onChange={onChange}
        onKeyDown={noDot}
      />
    </>
  );
};

export default Input;
