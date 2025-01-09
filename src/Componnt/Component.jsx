import { useState, useEffect } from "react";
import "./Component.css";
export default function () {
  let [input, setInput] = useState("");
  let [area, setArea] = useState(0);
   const defaultInput =1;
  const pi = Math.PI;

  useEffect(() => {
    setArea(pi * input * input);
  }, [input]);

  return (
    <>
      {/* formula and solution container */}
      <div className="main-container">
        <div className="sf-container">
          {!input ? (
            <div className="formula">A=πr&sup2;</div>
          ) : (
            <div className="formula">A≈{parseFloat(area.toFixed(2))}</div>
          )}
          <div className="radius-text">
            <span className="r">r</span> &nbsp;&nbsp; Radius
          </div>
          <div className="solution-container">
            <p className="solution">Solution</p>
            {!isNaN(input) && input > 0 ? (
              <p className="result">
                A=πr&sup2;=π·{input}&sup2; ≈ {parseFloat(area.toFixed(5))} 
              </p>
            ) : input === "" ? (
              <p className="unwanted">A=πr&sup2;=π·{defaultInput}&sup2;</p>
            ) : (
              <p className="error">The variable r should be a positive number</p>
            )}
          </div>
        </div>
        {/* input and circle container */}
        <div className="ic-container">
          <div>
            <input
              type="text"
              placeholder="Enter value"
              value={input}
              onChange={(e) => {
                let inInt = e.target.value;
                setInput(inInt);
              }}
            />
          </div>
          <div className="circle-container">
            <div className="circle">
              <hr className="radius1" />

              <hr className="dot" />
              <span className="d">d</span>
              <hr className="radius2" />
              <hr className="radius3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
