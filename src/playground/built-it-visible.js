class VisibilityToggle extends React.Component{
    //Bind this
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    //Initial State
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        //changing the state on click(setState)
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility 
            }
        })
    }
    render(){
        //JSX
        return(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.visibility && <p>Hey!! Some Content Here</p>}
        </div>
    )

    }
}
//Render Output
ReactDOM.render(<VisibilityToggle />, document.querySelector('.root'))



// let visibility = false;

// const showDetails = ()=>{
//     visibility = !visibility;
//     SomeFunction()
// }

//     const SomeFunction = ()=>{
// //JSX
// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={showDetails}>
//             {visibility ? 'hideDetails' : 'showDetail'}
//         </button>

//         {visibility && <a href = "#">Details</a>}
//     </div>
// );

// const appRoot = document.querySelector('.root')

// ReactDOM.render(template, appRoot)
//     }

//  SomeFunction();