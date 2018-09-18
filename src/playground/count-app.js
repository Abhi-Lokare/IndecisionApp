class Count extends React.Component {
    //bind this for all methods
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        //Set initial state
        this.state = {
            count: 0 //Using default prop values if user doesn't provide one
        }
    }

     /* Triggers when a component is rendered */
    componentDidMount() {
         /*Try and Catch errors if some bad data already present in LS */
        try {
             /* Getting current count that stored in the LS */
            const count = parseInt(localStorage.getItem('count'), 10)
          /* validating the Mount lifeCycle of component */
            /* Updating count state only when valid data presented in LS */
            if (!isNaN(count)) {
                  /* Change state */
                this.setState(() => ({ count: count }))
            }
        } catch (e) {
            /* do nothing */
        }
    }

  /* Triggers when a component state/prop is changed */
    componentDidUpdate(prevProps, prevState) {
        /* validating the Update lifeCycle of component */
        /* Updating only when options count changes  */
        if (this.state.count !== prevState.count) {
            /* Taking current count and storing that into the LS */
            const json = localStorage.setItem('count', this.state.count)
        }

    }
    //Change States on events(click, submit, etc)
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        //JSX
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

//Render Output
ReactDOM.render(<Count count={1} />, document.querySelector('.root'))






// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp()
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp()
// }


// const appRoot1 = document.querySelector('.root')

// const renderCounterApp = () => {
//     //JSX
//     const template1 = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(template1, appRoot1)

// }

// renderCounterApp()