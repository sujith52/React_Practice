let {useState, useEffect} = React

let CustomHooks = () => {
    return(
        <>
            <ShowingFunc/>
        </>
    )
}

let UseToogles = (initialValue = false) => {
    let[value, setValue] = useState(initialValue)
    let toggle = () => setValue((prev) => !prev)
    return [value, toggle]
}

let ShowingFunc = () => { 
    let [isOpen, toogleOpen] = UseToogles(false)
    let [name, setName] = LocalStorage("sujith","")
    return(
        <>
        <div className="bg-green-200 p-3 m-2  ">
            <button onClick={toogleOpen} className="bg-red-200 p-2 ">
                {isOpen ? "Hide" : "Show" }
            </button>
            {isOpen && <h1>Hello sujith bro !</h1>}
        </div>
        <div className="bg-pink-400 p-4 m-1 ">
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <h1 className="text-center text-3xl">{name}</h1>
        </div>
        </>
    )
}

let LocalStorage = (key, initialValue) => {
    let[value, setValue] = useState(()=> {
        let saved = localStorage.getItem(key)
        return saved !== null ? JSON.parse(saved) : initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return[value,setValue]
}

let Debouncing = (value, delay =500) => {
    let[debvalue, setDebvalue] = useState(value)
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebvalue(value)
        },delay)

        return () => clearTimeout(timer)
    },[value,delay])
    return debvalue
}

let UsingDebounse = () => {
    let[ser, setser] = useState("")
    let debouncedSearch = Debouncing(ser,500)
    useEffect(()=>{
        if(debouncedSearch){
            console.log(`searc API for : ${debouncedSearch}`)
        }
    },[])
}

