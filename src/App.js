// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import InfoBox from "./components/UserInput/InfoBox";
import CaclulatedResult from "./components/UserInput/CaclulatedResult";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [percInputValue, setPercInputValue] = useState("");
  const [nOfPeople, setNOfPeople] = useState("");
  const [active, setActive] = useState(false);
  // Calculated
  const [totalTip, setTotalTip] = useState("");
  const [perPersonTip, setPerPersonTip] = useState("");

  function inputHandler(e) {
    setInputValue(Number(e.target.value));
  }

  function percInputHandler(e) {
    setPercInputValue(Number(e.target.value));
  }

  function nofPeopleHandler(e) {
    setNOfPeople(Number(e.target.value));
  }

  useEffect(() => {
    setPerPersonTip(
      (inputValue * percInputValue) / 100 / nOfPeople > 0
        ? (inputValue * percInputValue) / 100 / nOfPeople
        : ""
    );
    setTotalTip(
      ((inputValue * percInputValue) / 100 + inputValue) / nOfPeople > 0
        ? ((inputValue * percInputValue) / 100 + inputValue) / nOfPeople
        : ""
    );
  }, [inputValue, percInputValue, nOfPeople]);

  function percentageTaker(event) {
    setTotalTip(((inputValue * percInputValue) / 100 + inputValue) / nOfPeople);
    setPercInputValue(event.target.innerText);
    setActive(!active);
  }

  return (
    <div className="app">
      <React.Fragment>
        <InfoBox
          input={inputValue}
          totalTip={totalTip}
          setTotalTip={setTotalTip}
          percInput={percInputValue}
          setPercInput={percInputHandler}
          setPerPersonTip={setPerPersonTip}
          nOfPeople={nOfPeople}
          setNOfPeople={setNOfPeople}
          active={active}
          setActive={setActive}
          onChange={inputHandler}
          onBtnClick={percentageTaker}
          nofPeople={nofPeopleHandler}
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
          ]}
        />
      </React.Fragment>
    </div>
  );
}

export default App;
