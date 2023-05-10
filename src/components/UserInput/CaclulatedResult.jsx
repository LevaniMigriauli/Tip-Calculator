import React from "react";
import "./CaclulatedResult.scss";
import Card from "../UI/Card";

const CaclulatedResult = ({
  perPersonTip,
  totalTip,
  reset,
  resetBtnActive,
}) => {
  return (
    <Card className="Caclulated-result">
      <div className="tip-amount">
        <p>
          Tip Amount <span>/person</span>
        </p>
        <p>
          $
          {isNaN(perPersonTip) || !isFinite(perPersonTip)
            ? "0.00"
            : perPersonTip}
        </p>
      </div>
      <div className="total-amount">
        <p>
          Total <span>/person</span>
        </p>
        <p> ${isNaN(totalTip) || !isFinite(totalTip) ? "0.00" : totalTip}</p>
      </div>
      <button className={resetBtnActive ? "filled" : ""} onClick={reset}>
        RESET
      </button>
    </Card>
  );
};

export default CaclulatedResult;
