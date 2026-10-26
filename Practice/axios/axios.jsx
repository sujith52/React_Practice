let {useEffect, useState} = React

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <h1>Is this working !</h1>
        <AxiosFetch/>
    </>
)

function AxiosFetch(){
    let[data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            response => setData(response.data)
        )
    },[])

    return(
        <div >
            {data.map((u)=>(
                <div key={u.id} className="bg-green-200 p-2 m-1 text-xl ">
                    <h1>{u.title}</h1>
                </div>
            ))}
        </div>
    )
}