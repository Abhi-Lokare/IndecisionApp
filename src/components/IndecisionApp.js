import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionaModal from "./OptionModal";

//IndecisionApp Component --> main Component
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOptions: undefined /*Adding new state to track the modal's state */
  };
  // change state
  handleClearSelectedOptions = () => {
    this.setState(prevState => ({
      selectedOptions: undefined
    })); /*on click button "Okay" we r changing state back to undefined so modal will close */
  };

  //Change state
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    /* when user click the "What to choose button" we want the state to change from undefined to true */
    /* then the module will be Shown */
    //  this.setState((prevState) => ({ selectedOptions: !prevState.selectedOptions})) /*flip the value !undefined = true */
    // alternative method
    this.setState(() => ({ selectedOptions: option }));
  };

  //Change state
  handleAddOption = option => {
    //Option input validation
    if (!option) {
      return "Enter Valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      /* check If item already exists */
      return "This option already Exists ";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  // Change state
  handleDeleteOption = optionText => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionText !== option;
      })
    }));
  };

  /* Triggers when a component is rendered */
  componentDidMount() {
    /*Try and Catch errors if some bad data already present in LS */
    try {
      /* Getting current array of options that stored in the LS */
      const options = JSON.parse(localStorage.getItem("options"));
      /* validating the Mount lifeCycle of component */
      /* Updating options state only when valid data presented in LS */
      if (options) {
        /* Change state */
        this.setState(prevState => ({ options: options }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  /* Triggers when a component state/prop is changed */
  componentDidUpdate(prevProps, prevState) {
    /* validating the Update lifeCycle of component */
    /* Updating only when options array changes i.e valid option entered */
    if (prevState.options.length !== this.state.options.length) {
      /* Taking current array of options and storing them into the LS */
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    //Data
    const title = "Indecision App";
    const subTitle = "Put your decision in the hands of a computer";

    //JSX
    return (
      <div>
        {/* USing data in components */}
        <Header title={title} subTitle={subTitle} />
        <div className="container">
          {" "}
          {/* Wrapper */}
          <Action
            /* set props hasOptions so it can access in its component*/
            hasOptions={this.state.options.length > 0}
            /* set props handlePick so it can access in its component*/
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              /* set props options so it can access in its component*/
              options={this.state.options}
              /* set handleDeleteOptions method props so this can access in its component*/
              handleDeleteOptions={this.handleDeleteOptions}
              /* set handleDeleteOption method props so this can access in its component*/
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              /* set handleAddOption method props so this can access in its component*/
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionaModal
          /* set selectedOptions method props so this can access in its component*/
          selectedOptions={this.state.selectedOptions}
          /* set handleClearSelectedOptions method props so this can access in its component*/
          handleClearSelectedOptions={this.handleClearSelectedOptions}
        />
      </div>
    );
  }
}
