import React from "react";
import "./CaclulatedResult.css";
import Card from "../UI/Card";

const CaclulatedResult = (props) => {
  const resetHandler = () => {
    props.reset.forEach((element) => {
      element("");
    });
  };

  // console.log(props.totalTip, props.perPersonTip);

  return (
    <Card className="Caclulated-result">
      <div className="tip-amount">
        <p>
          Tip Amount <span>/person</span>
        </p>
        <p> ${props.perPersonTip} </p>
      </div>
      <div className="total-amount">
        <p>
          Total <span>/person</span>
        </p>
        <p> ${props.totalTip}</p>
      </div>
      <button onClick={resetHandler}>RESET</button>
    </Card>
  );
};

export default CaclulatedResult;
