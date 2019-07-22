import React from "react";

const OperatorButton = (props) => {
  return (
    <div>
      {
        <button className="btn operator-btn">{props.optionText}</button>
      }
    </div>
  );
};

export default OperatorButton;