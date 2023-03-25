import "./AnswerBox.css";
import Card from "../UI/Card";
// import InfoBox from "./InfoBox";

const AnswerBox = (props) => {
  return (
    <Card>
      <div>Tip Amount /person {props.perPersonTip}</div>
      <div>Total /person {props.totalTip}</div>
    </Card>
  );
};

export default AnswerBox;
