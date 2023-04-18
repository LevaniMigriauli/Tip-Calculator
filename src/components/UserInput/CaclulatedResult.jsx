import React from "react";
import "./CaclulatedResult.css";
import Card from "../UI/Card";

const CaclulatedResult = ({ perPersonTip, totalTip, reset }) => {
  return (
    <Card className="Caclulated-result">
      <div className="tip-amount">
        <p>
          Tip Amount <span>/person</span>
        </p>
        <p> ${perPersonTip} </p>
      </div>
      <div className="total-amount">
        <p>
          Total <span>/person</span>
        </p>
        <p> ${totalTip}</p>
      </div>
      <button onClick={reset}>RESET</button>
    </Card>
  );
};

export default CaclulatedResult;
