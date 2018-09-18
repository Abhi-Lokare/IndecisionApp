import React from 'react';

//AddOption Component 
export default class AddOption extends React.Component {
    //Set the Initial State to Undefined for error
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();
        //Remove white-Spaces
        let option = e.target.elements.option.value.trim()
        //Add options to the array method and returns error message if option is invalid
        const error = this.props.handleAddOption(option);
        //Change State
        this.setState(() => ({ error: error }))  /*Change the state with Return the Error Method */
        if (!error) { e.target.elements.option.value = ''; } /*clear the input value if no error in input */

    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>} {/*logging the error to UI using the state */}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">AddOption</button>
                </form>
            </div>
        )
    }
}