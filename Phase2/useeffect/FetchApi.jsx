let {useEffect, useState} = React

let FeetchApi = () => {
    return(
        <>
            <Users/>
        </>
    )
}

let useFetch =(url)=>{
    let[data, setData] = useState([])
    let[load, setLoad] = useState(true)
    let[err, setErr] = useState(null)

    useEffect(()=>{
        let contoller = new AbortController
        async function fetchData() {
            setLoad(true)
            setErr(null)
            try {
                let response = await fetch(url, {
                    signal: contoller.signal
                })
                if (!response.ok) {
                    throw new Error(`failed to fetch api`)
                }
                let result = await response.json()
                setData(result)
            } catch (err) {
                if (err.name != "AbortError") {
                    setErr(err.message)
                }
            } finally{
                if (!contoller.signal.aborted) {
                    setLoad(false)
                }
            }
        }
        fetchData()
        return ()=> contoller.abort()
    },[url])
    return {data, load, err}
}

let Users = () => {
    let {data, load, err} = useFetch("https://fooapi.com/api/posts")
    console.log("CURRENT DATA TYPE:", typeof data, data);
    if(load) return <h1>Loading....</h1>
    if(err) return <h2>{err}</h2>
    let posts = data?.data || []
    return(
        <div className="bg-green-200 grid grid-cols-2 gap-4 ">
            {
                posts.map((u)=>(
                    <div key={u.id} className="bg-gray-200 p-4 m-2 rounded-xl">
                        <h2 className="text-2xl text-blue-800 m-1">{u.title}</h2>
                        <p>{u.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

