let { useRef, useEffect } = React;

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