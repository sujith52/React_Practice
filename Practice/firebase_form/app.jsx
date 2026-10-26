let {useState,useEffect} = React

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
        <h1>Firebase studio i still talk about you my friend.</h1>
        <ReactForm/>
        <AxiosFetch/>
    </>
)

function ReactForm(){
    let [data, setData] = useState({
        fullname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    let{fullname, email, password, confirmPassword} = data
    let changeHandiler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let submitHandiler = e => {
        e.preventDefault()
        axios.post(`https://da-i-am-not-stupid-bro-firebaseio.com/registerUsers.json`,data).then(
            ()=> alert(`form was submitted sucessfully !`)
        )
    }

    return(
        <div className="bg-blue-200 text-xl p-4 m-1 ">
            <center>
                <form onSubmit={submitHandiler} >
                    <input type="text" name="fullname" value={fullname} onChange={changeHandiler} placeholder="Enter the name" className="my-2" /><br />
                    <input type="email" name="email" value={email} onChange={changeHandiler} placeholder="Enter email" className="my-2"/><br />
                    <input type="password" name="password" value={password} onChange={changeHandiler} placeholder="Enter password" className="my-2"/><br />
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandiler} placeholder="Enter conform password" className="my-2"/><br />
                    <input type="submit" name="submit" />
                </form>
            </center>
        </div>
    )
}



function AxiosFetch(){
    let[data, setData] = useState([])
    
    useEffect(()=>{
        axios.get(`https://dat-i-am-not-stupid-bro-rtdb.firebaseio.com/registerUsers.json`)
        .then(response => {
            let firedata = response.data
            if(firedata){
                let useArray = Object.keys(firedata).map(key =>({
                    id:key,
                    ...firedata[key]
                }))
                setData(useArray)
            } else{setData([])}
        })
    },[])

    return(
        <div className="bg-blue-200 p-4 m-1 text-xl ">
            {data.map((u)=>(
                <div key={u.id} className="flex flex-row gap-2">
                    <h1 className="text-blue-600 p-2">{u.fullname}</h1>
                    <h1 className="text-green-600 p-2">{u.email}</h1>
                    <h1 className="text-red-600 p-2">{u.password}</h1>
                    <h1 className="text-red-400 p-2">{u.confirmPassword}</h1>
                </div>
            ))}
        </div>
    )
}