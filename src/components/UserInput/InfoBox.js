import React from "react";
import "./InfoBox.css";
import Button from "../UI/Button";

const InfoBox = (props) => {
  const tipsArray = [5, 10, 15, 25, 50];

  return (
    <div>
      <label> Bill</label>
      <input
        className="bill-input"
        type="number"
        value={props.input}
        onChange={props.onChange}
      />
      <div>
        {tipsArray.map((item, index) => {
          return (
            <Button
              id={Number(props.percInput) === item && "active"}
              btnPercentage={item}
              key={index}
              clickFunction={props.onBtnClick}
            ></Button>
          );
        })}
      </div>
      <label>Custom %</label>
      <input
        type="number"
        value={props.percInput}
        onChange={props.setPercInput}
      />
      <label>Number of People</label>
      <input type="number" value={props.nOfPeople} onChange={props.nofPeople} />
    </div>
  );
};

export default InfoBox;
