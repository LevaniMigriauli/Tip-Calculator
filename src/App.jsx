// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import InfoBox from "./components/UserInput/InfoBox";
import CaclulatedResult from "./components/UserInput/CaclulatedResult";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [percInputValue, setPercInputValue] = useState("");
  const [nOfPeople, setNOfPeople] = useState(1);
  // Validation
  // const [error, setError] = useState(false);
  // Calculated
  // const [totalTip, setTotalTip] = useState("");
  // const [perPersonTip, setPerPersonTip] = useState("");

  function inputHandler(e) {
    setInputValue(Number(e.target.value));
  }

  function percInputHandler(e) {
    setPercInputValue(Number(e.target.value));
  }

  function nofPeopleHandler(e) {
    setNOfPeople(Number(e.target.value));
  }

  function percentageTaker(event) {
    setPercInputValue(event.target.textContent);
  }

  console.log(inputValue, percInputValue, nOfPeople);

  const perPersonTip =
    (inputValue * percInputValue) / 100 / nOfPeople > 0
      ? (inputValue * percInputValue) / 100 / nOfPeople
      : "";

  let totalTip = (
    (inputValue * (1 + percInputValue / 100)) /
    nOfPeople
  ).toFixed(2);

  return (
    <div className="app">
      <InfoBox
        input={inputValue}
        percInput={percInputValue}
        setPercInput={percInputHandler}
        nOfPeople={nOfPeople}
        onChange={inputHandler}
        onBtnClick={percentageTaker}
        nofPeople={nofPeopleHandler}
        // error={error}
      />
      <CaclulatedResult
        totalTip={totalTip}
        perPersonTip={perPersonTip}
        // reset={[
        //   setPerPersonTip,
        //   setTotalTip,
        //   setInputValue,
        //   setNOfPeople,
        //   setPercInputValue,
        //   setError,
        // ]}
      />
    </div>
  );
}

export default App;
