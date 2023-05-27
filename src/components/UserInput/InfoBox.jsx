import React, { useState, useEffect } from "react";
import "./InfoBox.scss";
import Button from "../UI/Button";
import Input from "../UI/Input";
import dollarIcon from "../../assets/images/dollar-icon.svg";
import personIcon from "../../assets/images/person-icon.svg";

const tipsArray = [5, 10, 15, 25, 50];
const invalidInputText = "Can't be zero";

const InfoBox = ({
  input,
  nOfPeople,
  nofPeople,
  onChangeBill,
  percInput,
  setPercInput,
}) => {
  const [error, setError] = useState("");

  const isEmpty = nOfPeople === "";

  const isInvalid =
    nOfPeople
      .split("")
      .map((el) => Number(el))
      .reduce((a, b) => a + b, 0) === 0;

  useEffect(() => {
    isEmpty
      ? setError("")
      : isInvalid
      ? setError(invalidInputText)
      : setError("");
  }, [isEmpty, isInvalid]);

  return (
    <div className="info-box">
      <div className="info-box__bill">
        <Input
          className="input-bill"
          label="Bill"
          value={input}
          onChange={onChangeBill}
          placeholder="0"
          img={dollarIcon}
        />
      </div>

      <p> Select Tip %</p>
      <div className="percentage-selection">
        {tipsArray.map((item, index) => (
          <Button
            id={Number(percInput) === item ? "active" : ""}
            btnPercentage={item}
            key={index}
            onClick={() => setPercInput(String(item))}
          ></Button>
        ))}

        <div className="info-box__people">
          <Input
            className="perc-input"
            value={percInput}
            placeholder="Custom"
            onChange={(e) => setPercInput(e.target.value)}
          />
        </div>
      </div>

      <Input
        className="input-nOfPeople"
        placeholder="0"
        label="Number of People"
        value={nOfPeople}
        onChange={nofPeople}
        error={error}
        img={personIcon}
        noDot={(e) => {
          if (e.key === ".") {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};

export default InfoBox;
