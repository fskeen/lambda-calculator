import React from "react";
import SpecialButton from "./SpecialButton"

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div className="specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       props.specials.map(a => {
        return <SpecialButton key={a} optionText={a}/>
      })
      
      }
       
    </div>
  );
};

export default Specials;