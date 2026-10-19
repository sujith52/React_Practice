

let { useRef, useEffect, useMemo, useCallback, useReducer } = React;

function Usereff(){
    let data = useRef(null)
    let submitHandler = e =>{
        e.preventDefault()
        console.log(data.current.value)
    }
    useEffect(()=>{
        data.current.focus()
    },[])
    
    return(
        <div>
            <center>
                <form onSubmit={submitHandler}>
                <input ref={data} type="text" placeholder="Enter the name bro !" /><br />
                <input type="submit" />
                </form>
            </center>
            
        </div>
    )
}

function Clicks(){
    let count = useRef(0)
    function handleclick(){
        count.current++
        console.log(count.current)
    }
    return(
        <div>
            <button onClick={handleclick}>click me </button>
        </div>
    )
}

function UseMemos(){
    let [count, setCount] = useState(0)
    let [nums] = useState([10,20,30,40,50,20,63])
    let total = useMemo(()=>{
        return nums.reduce((s,n)=> s + n, 0)
    },[nums])

    return(
        <div>
            <h2>Total : {total}</h2>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count + 1)}}>Add</button>
        </div>
    )
}

function UseCallback(){
    let [count, setCount] = useState(0)
    let handleClick = useCallback(()=>{
        console.log(`hello bro !`)
    },[])

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=> setCount(count+1)}>add</button>
            <button type="submit" onClick={handleClick}>Submit the things</button>
        </div>
    )
}

function reducer(state, action){
    switch (action.type) {
        case "inc":
            return state + 1
        case "dec":
            return state - 1
        case "mul":
            return state * state
        default:
            state;
    }
}

function Usereducers(){
    let [state, dispatch] = useReducer(reducer, 0)
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={()=> dispatch({type:"inc"})}>add</button>
            <button onClick={()=> dispatch({type:"dec"})}>sub</button>
            <button onClick={()=> dispatch({type:"mul"})}>mul</button>
        </div>
    )
}