// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import InfoBox from "./components/UserInput/InfoBox";
import CaclulatedResult from "./components/UserInput/CaclulatedResult";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [percInputValue, setPercInputValue] = useState("");
  const [nOfPeople, setNOfPeople] = useState(1);
  // Validation
  const [error, setError] = useState("");

  // Calculated
  // const [totalTip, setTotalTip] = useState("");
  // const [perPersonTip, setPerPersonTip] = useState("");

  useEffect(() => {
    nOfPeople === 0 ? setError("Can't be zero") : setError("");
  }, [nOfPeople]);

  function inputHandler(e) {
    setInputValue(Number(e.target.value));
  }

  function percInputHandler(e) {
    setPercInputValue(Number(e));
  }

  function nofPeopleHandler(e) {
    setNOfPeople(Number(e.target.value));
  }

  const perPersonTip =
    (inputValue * percInputValue) / 100 / nOfPeople > 0
      ? ((inputValue * percInputValue) / 100 / nOfPeople).toFixed(2)
      : "";

  const totalTip = (
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
        // onBtnClick={percentageTaker}
        nofPeople={nofPeopleHandler}
        peopleInputError={error}
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
