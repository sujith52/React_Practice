let data = document.getElementById('root')
let root = ReactDOM.createRoot(data)
root.render(
    <>
        <CounterApp/>
    </>
)

function CounterApp(){
    let [count, setCount] = React.useState(0)
    return(
        <div className="p-20 text-center gap-5 flex-row bg-blue-200">
            <h1 className="text-[6rem] bg-green-300 rounded-xl p-4">Counting App</h1>
            <h1 className="text-xl p-10 ">{count}</h1>
            <button className="p-4 bg-green-500 rounded-xl text-xl " onClick={()=>{setCount(count + 1)}} >ADD+</button>
            <button className="p-4 bg-red-500 rounded-xl text-xl ml-5" onClick={()=>{setCount(count - 1)}}>SUB-</button>
            <button className="p-4 bg-purple-500 rounded-xl text-xl ml-5" onClick={()=> setCount(0)}>RESET(0)</button>
            <i><b><p>Time is more valuable - Inception</p></b></i>
        </div>
    )
}