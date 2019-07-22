import React from "react";

const NumberButton = (props) => {
  const value = parseFloat(props.optionText)
  return (
    <div>
      {
        <button className="btn number-btn" id={"num" + props.optionText} onClick={() => {props.handleButtonPress(value)}}>{props.optionText}</button>
      }
    </div>
  );
};

export default NumberButton;