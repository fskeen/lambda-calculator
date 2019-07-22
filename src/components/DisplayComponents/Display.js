import React from "react";


const Display = (props) => {
  return (
    <div className="output">  
      <h2 className="output-text">
      {props.count}
      </h2>
    </div>);
};

export default Display;