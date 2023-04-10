import React, { useState } from "react";
import "./InfoBox.css";
import Button from "../UI/Button";

const tipsArray = [5, 10, 15, 25, 50];

const InfoBox = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  return (
    <div className="info-box">
      <label> Bill</label>
      <input
        className="input"
        type="number"
        min={0}
        value={props.input}
        onChange={props.onChange}
        placeholder="0"
        // onFocus={focusHandler}
        // onBlur={blurHandler}
      />
      <label> Select Tip %</label>
      <div className="percentage-selection">
        {tipsArray.map((item, index) => (
          <Button
            id={Number(props.percInput) === item && "active"}
            btnPercentage={item}
            key={index}
            onClick={() => props.setPercInput(item)}
          >
            
          </Button>
        ))}
        <input
          className="input"
          type="number"
          min={0}
          value={props.percInput}
          placeholder="Custom"
          onChange={(e) => props.setPercInput(e.target.value)}
          // onFocus={focusHandler}
          // onBlur={blurHandler}
        />
      </div>

      <label>Number of People</label>
      <span>{props.peopleInputError}</span>
      <input
        className={`input ${
          props.peopleInputError ? "error" : isFocused ? "focus" : ""
        }`}
        type="number"
        min={0}
        value={props.nOfPeople}
        onChange={props.nofPeople}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default InfoBox;
