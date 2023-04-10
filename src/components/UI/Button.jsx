import "./Button.css";

const Button = (props) => {
  return (
    <button id={props.id} className="btn" onClick={props.onClick}>
      {props.btnPercentage}%
    </button>
  );
};

export default Button;
