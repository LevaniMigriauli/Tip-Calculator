// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import InfoBox from "./components/UserInput/InfoBox";
import AnswerBox from "./components/UserInput/AnswerBox";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [totalTip, setTotalTip] = useState(0);
  const [percInputValue, setPercInputValue] = useState(0);
  const [nOfPeople, setNOfPeople] = useState(0);
  const [active, setActive] = useState(false);
  const [perPersonTip, setPerPersonTip] = useState(0);

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
      <div>
        <InfoBox
          input={inputValue}
          // setInput={setInputValue}
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
          // percInput={percInputHandler}
          nofPeople={nofPeopleHandler}
        />
        <AnswerBox totalTip={totalTip} perPersonTip={perPersonTip} />
      </div>
    </div>
  );
}

export default App;
