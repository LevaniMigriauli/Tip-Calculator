import React, { useState } from "react";
import "./InfoBox.css";
import Button from "../UI/Button";

const InfoBox = (props) => {
  const tipsArray = [5, 10, 15, 25, 50];
  // const [isFocused, setIsFocused] = useState("");

  // const focusHandler = () => setIsFocused(true);

  // const blurHandler = () => setIsFocused("");

  return (
    <div className="info-box">
      <label> Bill</label>
      <input
        className="input"
        type="number"
        value={props.input}
        onChange={props.onChange}
        placeholder="0"
      />
      <label> Select Tip %</label>
      <div className="percentage-selection">
        {tipsArray.map((item, index) => (
          <Button
            id={Number(props.percInput) === item && "active"}
            btnPercentage={item}
            key={index}
            clickFunction={props.onBtnClick}
          ></Button>
        ))}
        <input
          type="number"
          value={props.percInput}
          placeholder="Custom"
          onChange={props.setPercInput}
        />
      </div>

      <label>Number of People</label>
      <input
        className="input"
        type="number"
        value={props.nOfPeople}
        onChange={props.nofPeople}
        // onFocus={focusHandler}
        // onBlur={blurHandler}
      />
    </div>
  );
};

export default InfoBox;
