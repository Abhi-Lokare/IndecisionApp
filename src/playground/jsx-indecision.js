
const object = {
    title: 'Indecision App',
    subTitle: 'App List',
    options: []
}


const onMakeDecision = ()=>{
    const option = Math.floor(Math.random() * object.options.length)
    alert(object.options[option])
}

const removeAll = () => {
    object.options = []
    renderObject()
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    e.target.elements.option.value = '';
    if (option) {
        object.options.push(option);
        renderObject();
    }
}

const appRoot = document.querySelector('.root')


const renderObject = () => {
    //JSX
    const template = (
        <div>
            <h1>{object.title}</h1>
            {object.subTitle && <p>{object.subTitle}</p>}
            <h1>{object.options.length > 0 ? 'Items here' : 'no Items'}</h1>
            <p>{object.options.length}</p>
            <ol>
                {
                    object.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <button disabled={object.options.length === 0} onClick={onMakeDecision}>What Should i do?</button>
            <button onClick={removeAll}>Remove All</button>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option" />
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

renderObject();






