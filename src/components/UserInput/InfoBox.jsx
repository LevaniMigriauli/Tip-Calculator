import React, { useState, useEffect } from "react";
import "./InfoBox.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

const tipsArray = [5, 10, 15, 25, 50];

const InfoBox = (props) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    props.nOfPeople === 0 ? setError(true) : setError(false);
  }, [props.nOfPeople]);

  return (
    <div className="info-box">
      <label> Bill</label>
      <Input
        className="input"
        type="number"
        value={props.input}
        onChange={props.onChangeBill}
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
          ></Button>
        ))}
        <Input
          className="input"
          type="number"
          value={props.percInput}
          placeholder="Custom"
          onChange={(e) => props.setPercInput(e.target.value)}
          // onFocus={focusHandler}
          // onBlur={blurHandler}
        />
      </div>

      <label>Number of People</label>
      <span>{error ? "Can't be zero" : ""}</span>
      <Input
        className={`input`}
        type="number"
        value={props.nOfPeople}
        onChange={props.nofPeople}
        error={error}
        // onFocus={focusHandler}
        // onBlur={blurHandler}
      />
    </div>
  );
};

export default InfoBox;
