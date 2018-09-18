import React from "react";
import Option from "./Option";

//Options StateLess Component
const Options = props => (
  <div>
      <div className="widget-header">
          
      <h3 className="widget-header__title">Your Options</h3>
    <button
      className=" button button--link"
      onClick={props.handleDeleteOptions}
    >
      RemoveAll
    </button>
      </div>
    {/* If No options Present Give some msg */}
    {props.options.length === 0 && <p className="widget__message">Please Add Options to Choose</p>}

    {props.options.map((option, index) => (
      /* Nested component Options-->Option */
      <Option
        key={option}
        optionText={option}
        optionIndex={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    )) /*using passed data through props in their component*/}
  </div>
);
export default Options;
