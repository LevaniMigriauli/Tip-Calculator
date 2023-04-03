// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import InfoBox from "./components/UserInput/InfoBox";
import CaclulatedResult from "./components/UserInput/CaclulatedResult";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [percInputValue, setPercInputValue] = useState("");
  const [nOfPeople, setNOfPeople] = useState("");
  // Validation
  const [error, setError] = useState("");
  // Calculated
  const [totalTip, setTotalTip] = useState("");
  const [perPersonTip, setPerPersonTip] = useState("");

  function inputHandler(e) {
    setInputValue(e.target.value);
  }

  function percInputHandler(e) {
    setPercInputValue(Number(e.target.value));
    Number(nOfPeople) === 0 ? setError(true) : setError(false);
  }

  function nofPeopleHandler(e) {
    setNOfPeople(e.target.value);

    Number(nOfPeople) < 1 ? setError(true) : setError(false);
  }

  useEffect(() => {
    // if (Number(nOfPeople) === 0) {
    //   // setError("Can't be zero");
    // } else {
    setPerPersonTip(
      (inputValue * percInputValue) / 100 / nOfPeople > 0
        ? (inputValue * percInputValue) / 100 / nOfPeople
        : ""
    );

    setTotalTip(
      ((inputValue * percInputValue) / 100 + inputValue) / nOfPeople > 0
        ? ((inputValue * percInputValue) / 100 + Number(inputValue)) / nOfPeople
        : ""
    );

    Number(nOfPeople) < 1 ? setError(true) : setError(false);
  }, [inputValue, percInputValue, nOfPeople]);

  function percentageTaker(event) {
    setTotalTip(
      (inputValue * percInputValue) / 100 + Number(inputValue) / +nOfPeople
    );
    setPercInputValue(event.target.innerText);
    Number(nOfPeople) < 1 ? setError(true) : setError(false);
  }

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
        error={error}
      />
      <CaclulatedResult
        totalTip={totalTip}
        perPersonTip={perPersonTip}
        reset={[
          setPerPersonTip,
          setTotalTip,
          setInputValue,
          setNOfPeople,
          setPercInputValue,
          setError,
        ]}
      />
    </div>
  );
}

export default App;
