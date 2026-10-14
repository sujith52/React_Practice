

function IncreButton(){
    let [button, setButton] = React.useState(0)
    function increase3prev(){
        setButton(prev => prev + 1)
        setButton(prev => prev + 1)
        setButton(prev => prev + 1)
    }
    let [user, setUser] = React.useState({name:'sujith',age:22})
    function increaseAge(){
        setUser(pre => ({
            ...pre, age : pre.age + 1
        }))
    }

    let [rest, setRest] = React.useState(["swad biryani", "gongura pulav"])
    function addRest(){
        setRest(pre => ([
            ...pre, "babachi"
        ]))
    }
    addRest()
    return(
        <div>
            <h1>{button} count</h1>
            <button onClick={()=>setButton(button + 1)}>Click to increase </button>
            <button onClick={()=> setButton(button - 1)}> Decrease</button>
            <button onClick={increase3prev}>Increase 3 values </button>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button onClick={increaseAge}>Increase Age</button>
            
        </div>
    )
}


function ControlledInput(){
    let [name, setName] = React.useState("")
    return(
        <div>
            <input 
             type="text"
             value={name}
             placeholder="Enter your name :"
             onChange={(eve)=> setName(eve.target.value)}
            />
            <h2>Your Name : {name}</h2>
        </div>
        
    )
}

function Forms(){
    let [name, setName] = React.useState("")
    let [email, setEmail] = React.useState("")
    let [password, setPassword] = React.useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log({name, email, password});
    }
    return(
        <div>
            <form>
                <input type="text"
                 value={name}
                 placeholder="Enter your name"
                 onChange={(eve)=>setName(eve.target.value)}
                />
                <input type="email"
                 value={email}
                 placeholder="Enter your email"
                 onChange={(eve)=>setEmail(eve.target.value)}
                />
                <input type="password"
                 value={password}
                 placeholder="Enter your password"
                 onChange={(eve)=>setPassword(eve.target.value)}
                /> <br />
                <button type="submit" onClick={handleSubmit}>CLick to Submit</button>
                <br />
                <h2>{name},{email},{password}</h2>
            </form>
        </div>
    )
}

function OneState(){
    let [form, setForm] = React.useState({
        name:"", age:"", city:""
    })
    function handleChange(event){
        let {name, value} = event.target
        setForm((pev)=>({
            ...pev,
            [name]: value
        }))
        
        
    }

    return(
        <div>
            <input 
             type="text" 
             name="name"
             value={form.name}
             onChange={handleChange}
            />
            <input 
             type="number" 
             name="age"
             value={form.age}
             onChange={handleChange}
            />
        </div>
    )
}

function Checboxes(){
    let [aggred , setAggred] = React.useState(false)
    let [city, setCity] = React.useState("")
    return(
        <div>
            <input type="checkbox" checked={aggred} 
            onChange={(e)=> setAggred(e.target.value)}/>
            <select value={city} onChange={(e)=> setCity(e.target.value)}>
                <option value="Madanapalle">Madanapalle</option>
                <option value="Bengaluru">Bengaluru</option>
            </select>
            <p>{city}</p>
        </div>
    )
}

function Tempsinput({temp, settemp}){
    return(
        <div>
            <input type="number"
            value={temp}
            onChange={(e)=> settemp(e.target.value)} />
        </div>
    )
}

function Tempdisplay({temp}){
    return(
        <h1>The Temp is {temp}'C</h1>
    )
}

function AllTemp(){
    let [temp, setemp] = React.useState("25")
    return(
        <div>
            <Tempsinput temp={temp} settemp={setemp} />
            <Tempdisplay  temp={temp} />
        </div>
    )
}

function Child({onincrease}){
    return <button onClick={onincrease}>Increace</button>
}

function Parent(){
    let [count, setCount] = React.useState(0)
    return(
        <>
            <h1>{count}</h1>
            <Child onincrease={()=> setCount(prev => prev + 1)} />
        </>
    )
}