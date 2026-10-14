

function HandlingClicks(){
    function clicked(){
        alert("Welcome to the restarunt !")
    }
    return(
        <div>
            <h3>Click on button :</h3>
            <button onClick={clicked}>Click Me</button>
        </div>
    )
}

function OnsChange(){
    let [name, setName] = React.useState("")
    function handleChange(event){
        setName(event.target.value)
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleChange} placeholder="Enter your name bro !" />
            <h1>Hello {name} !</h1>
        </div>
    )
}

function Onsubmits(){
    function handlesubmit(event){
        event.preventDefault();
        alert('Form info has submitted sucessfully !')
    }

    return(
        <form onSubmit={handlesubmit} >
            <input type="email" placeholder="Enter your Email" required />
            <button type="submit">Submit</button>
        </form>
    )
}