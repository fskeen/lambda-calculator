import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      {
        <button className="btn number-btn" id={"num" + props.optionText}>{props.optionText}</button>
      }
    </div>
  );
};

export default NumberButton;