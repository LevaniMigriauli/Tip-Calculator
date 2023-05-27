import "./Button.css";

const Button = ({ id, onClick, btnPercentage }) => {
  return (
    <button id={id} className="btn" onClick={onClick}>
      {btnPercentage}%
    </button>
  );
};

export default Button;
