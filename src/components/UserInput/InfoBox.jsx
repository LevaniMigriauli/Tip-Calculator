import React, { useState, useEffect } from "react";
import "./InfoBox.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import dollarIcon from "../../assets/images/dollar-icon.svg";
import personIcon from "../../assets/images/person-icon.svg";

const tipsArray = [5, 10, 15, 25, 50];
const invalidInputText = "Can't be zero";

const InfoBox = (props) => {
  // let error = false;
  const [error, setError] = useState("");

  console.log(props.nOfPeople);

  useEffect(() => {
    props.nOfPeople === 0 ? setError(invalidInputText) : setError("");
  }, [props.nOfPeople]);

  return (
    <div className="info-box">
      <div className="info-box__bill">
        <Input
          className="input-bill"
          type="number"
          label="Bill"
          value={props.input}
          onChange={props.onChangeBill}
          placeholder="0"
          img={dollarIcon}
        />
      </div>

      <p> Select Tip %</p>
      <div className="percentage-selection">
        {tipsArray.map((item, index) => (
          <Button
            id={Number(props.percInput) === item && "active"}
            btnPercentage={item}
            key={index}
            onClick={() => props.setPercInput(item)}
          ></Button>
        ))}

        <div className="info-box__people">
          <Input
            className="perc-input"
            type="number"
            value={props.percInput}
            placeholder="Custom"
            onChange={(e) => props.setPercInput(e.target.value)}
          />
        </div>
      </div>

      <Input
        className="input-nOfPeople"
        type="number"
        placeholder="0"
        label="Number of People"
        value={props.nOfPeople}
        onChange={props.nofPeople}
        error={error}
        img={personIcon}
      />
    </div>
  );
};

export default InfoBox;
