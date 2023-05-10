import React, { useState } from "react";
import "./App.css";
import InfoBox from "./components/UserInput/InfoBox";
import CaclulatedResult from "./components/UserInput/CaclulatedResult";
import Wrapper from "./components/UI/Wrapper";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [percInputValue, setPercInputValue] = useState("");
  const [nOfPeople, setNOfPeople] = useState("");

  function inputHandler(e) {
    setInputValue(Number(e.target.value) === 0 ? "" : Number(e.target.value));
  }

  function percInputHandler(e) {
    setPercInputValue(Number(e) === 0 ? "" : Number(e));
  }

  function nofPeopleHandler(e) {
    setNOfPeople(Number(e.target.value));
  }

  console.log(inputValue, percInputValue, nOfPeople);
  const perPersonTip = (
    (inputValue * percInputValue) /
    100 /
    nOfPeople
  ).toFixed(2);

  const totalTip = (
    (inputValue * (1 + percInputValue / 100)) /
    nOfPeople
  ).toFixed(2);
  // console.log(perPersonTip, isNaN(perPersonTip), !isFinite(perPersonTip));
  // console.log(totalTip, isNaN(totalTip), !isFinite(totalTip));

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
