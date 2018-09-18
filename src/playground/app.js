//IndecisionApp Component --> main Component
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    /* Triggers when a component is rendered */
    componentDidMount() {
        /*Try and Catch errors if some bad data already present in LS */
        try {
            /* Getting current array of options that stored in the LS */
            const options = JSON.parse(localStorage.getItem('options'))
            /* validating the Mount lifeCycle of component */
            /* Updating options state only when valid data presented in LS */
            if (options) {
                /* Change state */
                this.setState((prevState) => ({ options: options }))
            }
        } catch (e) {
            console.log(e)
        }
    }

    /* Triggers when a component state/prop is changed */
    componentDidUpdate(prevProps, prevState) {
        /* validating the Update lifeCycle of component */
        /* Updating only when options array changes i.e valid option entered */
        if (prevState.options.length !== this.state.options.length) {
            /* Taking current array of options and storing them into the LS */
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }


    //Change state
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }


    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option)
    }

    //Change state
    handleAddOption(option) {
        //Option input validation
        if (!option) {
            return 'Enter Valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) { /* check If item already exists */
            return 'This option already Exists '
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    // Change state
    handleDeleteOption(optionText) {

        this.setState((prevState) => ({
            options: prevState.options.filter((option) => { return optionText !== option })
        }))
    }



    render() {
        //Data
        const title = 'Indecision App'
        const subTitle = 'Put your decision in the hands of a computer'

        //JSX
        return (
            <div>
                {/* USing data in components */}
                <Header title={title} subTitle={subTitle} />
                <Action
                    /* set props hasOptions so it can access in its component*/
                    hasOptions={this.state.options.length > 0}
                    /* set props handlePick so it can access in its component*/
                    handlePick={this.handlePick}
                />
                <Options
                    /* set props options so it can access in its component*/
                    options={this.state.options}
                    /* set handleDeleteOptions method props so this can access in its component*/
                    handleDeleteOptions={this.handleDeleteOptions}
                    /* set handleDeleteOption method props so this can access in its component*/
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// //Set Default Props 
// IndecisionApp.defaultProps = {
//     options: []
// }

//Header StateLess Component 
const Header = (props) => {
    return (
        <div>
            {/* Using data in components body */}
            <h1>{props.title}</h1>
            <h1>{props.subTitle}</h1>
        </div>
    )
}
//Setting Default Props if nothing passed
Header.defaultProps = {
    title: 'ANY DEFAULT TITLE'
}


//Action StateLess Component 
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}/*using passed data through props in their component*/
                disabled={!props.hasOptions}/*using passed data through props in their component*/
            >
                What should i do?
            </button>
        </div>
    )
}

//Options StateLess Component 
const Options = (props) => {
    return (
        <div>
            {/* If No options Present Give some msg */}
            {props.options.length === 0 && <p>Please Add Options to Choose</p>}
            <button onClick={props.handleDeleteOptions}>RemoveAll</button>
            {
                props.options.map((option) =>
                    /* Nested component Options-->Option */
                    <Option key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />) /*using passed data through props in their component*/
            }
        </div>
    )
}

//Option StateLess Component 
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            {/* making an implicit call(arrow function) because we have to pass option-Text along with it */}
            <button onClick={(e) => { props.handleDeleteOption(props.optionText) }}>Remove</button>
        </div>
    );
}

//AddOption Component 
class AddOption extends React.Component {
    //Binding method inside an Component
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        //Set the Initial State to Undefined for error
        this.state = {
            error: undefined
        }

    }
    //Always Bind the method used inside the component
    handleAddOption(e) {
        e.preventDefault();
        //Remove white-Spaces
        let option = e.target.elements.option.value.trim()
        //Add options to the array method and returns error message if option is invalid
        const error = this.props.handleAddOption(option);
        //Change State
        this.setState(() => ({ error: error }))  /*Change the state with Return the Error Method */
        if (!error) { e.target.elements.option.value = ''; }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} {/*logging the error to UI using the state */}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>AddOption</button>
                </form>
            </div>
        )
    }
}

//Render React Output
ReactDOM.render(<IndecisionApp options={['Javascript', 'React']} /*setting some default options*/ />, document.querySelector('.root'))
