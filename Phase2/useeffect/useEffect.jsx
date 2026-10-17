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


function AbortedController(){
    let [posts, setPost] = useState([])
    let [load, setLoad] = useState(true)
    let [err, setErr] = useState("")

    useEffect(()=>{
        let controller = new AbortController()

        async function fetchPosts(){
            setLoad(false)
            setErr("")

            try{
                let resonse = await fetch("https://jsonplaceholder.typicode.com/posts",
                    {signal: controller.signal}
                )

                if(!resonse.ok){
                    throw new Error("Failed to fetch the api")
                }

                let data = await resonse.json()
                setPost(data.slice(0,10))
            }
            
            catch(err){
                if(err.name !== "AbortError"){
                    setErr(err.message)
                }
            }
            finally{
                if(!controller.signal.aborted){
                    setLoad(false)
                }
            }
        }

        fetchPosts()
        return()=>{
            controller.abort()
        }
    },[])

    if(load) return <p>Loading the posts</p>
    if(err) return <p>Error : {err}</p>

    return(
        <div>
            <h3 className="text-3xl text-center p-1 m-10 rounded-2xl bg-green-200 ">Posts</h3>

            {posts.map((p)=>(
                <div key={p.id} className="text-center bg-blue-300 p-4 m-1 rounded-xl">
                    <h5 className="text-2xl ">{p.title}</h5>
                    <p>{p.body}</p>
                </div>
            ))}
        </div>
    )
}