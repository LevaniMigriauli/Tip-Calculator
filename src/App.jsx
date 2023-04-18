// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import InfoBox from "./components/UserInput/InfoBox";
import CaclulatedResult from "./components/UserInput/CaclulatedResult";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [percInputValue, setPercInputValue] = useState("");
  const [nOfPeople, setNOfPeople] = useState("");

  function inputHandler(e) {
    setInputValue(Number(e.target.value));
  }

  function percInputHandler(e) {
    setPercInputValue(Number(e));
  }

  function nofPeopleHandler(e) {
    setNOfPeople(Number(e.target.value));
  }

  let perPersonTip =
    (inputValue * percInputValue) / 100 / nOfPeople > 0
      ? ((inputValue * percInputValue) / 100 / nOfPeople).toFixed(2)
      : "0.00";

  let totalTip =
    (inputValue * (1 + percInputValue / 100)) / nOfPeople > 0
      ? ((inputValue * (1 + percInputValue / 100)) / nOfPeople).toFixed(2)
      : "0.00";

  const resetHandler = () => {
    setInputValue("");
    setPercInputValue("");
    setNOfPeople("");
  };

  return (
    <div className="app">
      <InfoBox
        input={inputValue}
        percInput={percInputValue}
        setPercInput={percInputHandler}
        nOfPeople={nOfPeople}
        onChangeBill={inputHandler}
        nofPeople={nofPeopleHandler}
      />
      <CaclulatedResult
        totalTip={totalTip}
        perPersonTip={perPersonTip}
        reset={resetHandler}
      />
    </div>
  );
}

export default App;
