let { useState, useEffect } = React;

function UseEff(){
    useEffect(()=>{
        console.log('component has apperead')
    },[])
    return <h1>Hello react bro !</h1>
}

function CleanUp(){
    useEffect(()=>{
        let timer = setInterval(() => {
            console.log("knock knock")
        }, 1000);

        return()=>{
            clearInterval(timer)
        }
    },[])
    return <h1>Knock knock joke</h1>
}

function FetchUsers(){
    let [users, setUsers] = useState([])
    let [load, setLoad] = useState(true)
    let [err, seErr] = useState("")
    useEffect(()=>{
        async function fetchUserss(){
            try{
                let response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error("Failed to fetch the data !")
                }
                let data = await response.json()
                setUsers(data)
            } catch(err){
                seErr(err.message)
            } finally{
                setLoad(false)
            }
        }
        fetchUserss()
    },[])

    if(load) return <p>Loading severs</p>
    if(err) return <p>Error {err}</p>

    return(
        <div className="items-center bg-gray-200">
            <img src="https://github.com/sujith52/Python_Practice/blob/main/Basic%20Python/File%20Handling/file_handling.jpg?raw=true" alt="sujith image" 
                className="h-40 rounded-2xl filter sepia-[50%] drop-shadow-xl transform rotate-[40deg] scale-100 hover:scale-125 transition duration-300"/>
            <h3 className="text-4xl text-red-600 p-4">Users :</h3>
            {users.map((u)=>(
                <div key={u.id} className="p-2 bg-green-200 text-center mb-2 rounded-2xl m-1">
                    <h4>{u.name}</h4>
                    <h6>{u.email}</h6>
                    <p>{u.phone}</p>
                </div>
            ))}
        </div>
    )
}