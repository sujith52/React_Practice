import { useState } from "react"

function TaskInput(){
    let[inpt,setInput] = useState([])
    return(
        <div>
            <form onSubmit={handle}>
                <input 
                type="text" 
                placeholder="Enter your task bro.."
                value={inpt}
                onChange={(e)=>{setInput(e.target.value)}}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TaskInput