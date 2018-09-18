import React from 'react';

//Action StateLess Component 
const Action = (props) =>(
    <div>
        <button
        className="big-button"
            onClick={props.handlePick}/*using passed data through props in their component*/
            disabled={!props.hasOptions}/*using passed data through props in their component*/
        >
            What should i do?
        </button>
    </div>
)

export default Action;