let {useState, useEffect} = React

let FetchingApi =() => {
    return(
        <>
            <FetchingIntoUi/>
        </>
    )
}

let useFetch=(url)=>{
    let[data, setData] = useState(null)
    let[load,setLoad] = useState(true)
    let[err,setErr] = useState(null)
    useEffect(()=>{
        let controller = new AbortController
        async function fetchData(){ 
        try {
                let response = await fetch(url,{
                    signal: controller.signal
                })
                if(!response.ok){
                    throw new Error(`failed to fetch`)
                }
                let result = await response.json()
                setData(result)
        } catch (err) {
            setErr(err)
        } finally{
            if (!controller.signal.aborted) {
                setLoad(false)
            }
        }
    }
    fetchData()
    return ()=> controller.abort()
    },[url])
    return {data, load, err}
}

let FetchingIntoUi =()=> {
    let{data,load,err} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current_weather=true")
    console.log("the type of data ", typeof data, data)
    if (load) return <div>Loading...</div>;
    if (err) return <div>Error fetching data!</div>;
    if (!data) return null;
    return(
        <div className="text-xl text-center text-black-600">
            <div>
                <h1>latitude: {data.latitude}<br /> longitude: {data.longitude}</h1>
                <h2>Temperature : {data.current_weather?.temperature}</h2>
                <h2>windspeed : {data.current_weather?.windspeed}</h2>
                <p>Time : {data.current_weather?.time}</p>
            </div>
        </div>
    )
}

