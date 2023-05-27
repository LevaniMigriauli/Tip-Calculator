import React, { useState } from "react";
import "./App.scss";
import InfoBox from "./components/UserInput/InfoBox";
import CaclulatedResult from "./components/UserInput/CaclulatedResult";
import Wrapper from "./components/UI/Wrapper";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [percInputValue, setPercInputValue] = useState("");
  const [nOfPeople, setNOfPeople] = useState("");

  function inputHandler(e) {
    e.target.value.length < 6 && setInputValue(e.target.value);
  }

  function percInputHandler(e) {
    e.length < 4 && setPercInputValue(e);
  }

  function nofPeopleHandler(e) {
    e.target.value.length < 5 && setNOfPeople(e.target.value);
  }

  const perPersonTip = (
    (inputValue * percInputValue) /
    100 /
    nOfPeople
  ).toFixed(2);

  const totalTip = (
    (inputValue * (1 + percInputValue / 100)) /
    nOfPeople
  ).toFixed(2);

  const resetHandler = () => {
    setInputValue("");
    setPercInputValue("");
    setNOfPeople("");
  };

  const resetActive =
    inputValue !== "" || percInputValue !== "" || nOfPeople !== "";

  return (
    <div className="app">
      <Wrapper>
        <InfoBox
          input={inputValue}
          percInput={percInputValue}
          setPercInput={percInputHandler}
          nOfPeople={nOfPeople}
          onChangeBill={inputHandler}
          nofPeople={nofPeopleHandler}
        />
        <CaclulatedResult
          perPersonTip={perPersonTip}
          totalTip={totalTip}
          reset={resetHandler}
          resetBtnActive={resetActive}
        />
      </Wrapper>
    </div>
  );
}

export default App;
