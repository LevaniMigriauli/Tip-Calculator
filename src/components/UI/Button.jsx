import "./Button.css";

const Button = (props) => {
  return (
    <>
      <button
        id={props.id}
        className="btn"
        onClick={(e) => props.clickFunction(e)}
      >
        {props.btnPercentage}
      </button>
    </>
  );
};

export default Button;
