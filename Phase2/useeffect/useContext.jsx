

let {createContext, useContext} = React

let UseContext = createContext()

function UseContexted(){
    let greets = `hello greetings `
    let sujith = `hello sujith gav`
    let novel = `Emperor Domination, Douluo Dalu`
    let contextVal = {greets, sujith, novel}
    return(
        <div>
            <UseContext.Provider value={contextVal} >
                <ComponentC/>
                <DisplatSujith/>
                <ModrenDrill/>
                <Mains/>
            </UseContext.Provider>
        </div>
    )
}

let ComponentC = () => {
    return(
        <div>
            <UseContext.Consumer>
                {value => <h1>{value.greets}</h1>}
            </UseContext.Consumer>
            <center>Hello React world bro !</center>
        </div>
    )
}

let DisplatSujith = () => {
    return(
        <UseContext.Consumer>
            {value => <h2>{value.sujith} hello</h2>}
        </UseContext.Consumer>
    )
}

let ModrenDrill = ()  => {
    let name = useContext(UseContext)
    return(<p>{name.sujith} Hello bro !</p>)
}

let Mains = () => {
    let items = useContext(UseContext)
    return(
        <div className="bg-green-200 m-2 p-4 text-black-400 text-2xl">
            <h1>{items.novel}</h1>
        </div>
    )
}