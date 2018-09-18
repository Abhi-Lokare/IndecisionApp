import React from 'react';

//Option StateLess Component 
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.optionIndex}. {props.optionText} </p>
       
        {/* making an implicit call(arrow function) because we have to pass option-Text along with it */}
        <button 
        className="button button--link"
        onClick={(e) => { props.handleDeleteOption(props.optionText) }}>
        Remove
        </button>
    </div>
);

export default Option;