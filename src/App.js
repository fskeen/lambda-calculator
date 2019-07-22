import React, {useState} from "react";
import "./App.css";
import Display from "../src/components/DisplayComponents/Display.js"
import {numbers, operators, specials} from "../src/data.js";
import Numbers from "../src/components/ButtonComponents/NumberButtons/Numbers"
import Operators from "../src/components/ButtonComponents/OperatorButtons/Operators"
import Specials from "../src/components/ButtonComponents/SpecialButtons/Specials"
import Logo from "./components/DisplayComponents/Logo";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [count, setCount] = useState(0);
// operator referenced by buttonpress function
  let operator = "+"
  const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecond: false,
    operator: null,
  }

  const handleButtonPress = (buttonValue) => {

    if (count === 0) {
      return setCount(buttonValue);
    } else if ((count !== 0)&& ((buttonValue >= 0 )||(buttonValue==="."))) {
      return setCount(parseFloat(`${count}${buttonValue}`))
    }

    return;
  }

  return (
    <div className="container">
      <div className="App">
      <Logo />
      <Display
        count={count}
        setCount={setCount}
      />
      <div className="btn-container">
        <div className="btn-separator">
          <Specials
            specials={specials}
            count={count}
            setCount={setCount}
          />
          <Numbers
            numbers={numbers}
            count={count}
            setCount={setCount}
            handleButtonPress={handleButtonPress}
          />
        </div>
          <Operators
            operators={operators}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
      
    </div> 
  );
}

export default App;
