import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      {
        <button className="btn special-btn">{props.optionText}</button>
      }
    </div>
  );
};

export default SpecialButton;