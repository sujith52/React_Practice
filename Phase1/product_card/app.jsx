

let cont = document.getElementById('root')
let root = ReactDOM.createRoot(cont)
root.render(
    <>
        <Products/>
    </>
)

function Products(){
    let products = [
        { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
        { id: 2, name: "Phone", price: 20000, category: "Electronics" },
        { id: 3, name: "Shoes", price: 2000, category: "Fashion" },
        { id: 4, name: "T-Shirt", price: 500, category: "Fashion" },
    ];
    let [search, setSearch] = React.useState("")
    let [cat, setCat] = React.useState("ALL")

    let filteredProd = products.filter((pr)=>{
        let matchsearch = pr.name
            .toLowerCase()
            .includes(search.toLowerCase())
        let matchescat = 
        cat === "ALL" || pr.category == cat

        return matchsearch && matchescat
    })


    return(
        <div className="bg-blue-300 p-20 flex-col text-center ">
            <h1 className="mb-4 text-4xl">Products :</h1>
            <input className="p-2 rounded-xl text-center" type="text" placeholder="Search the products" value={search} onChange={(e)=> setSearch(e.target.value)} />
            <select value={cat} onChange={(e)=> setCat(e.target.value)} className="ml-4 p-2 rounded-xl text-center">
                <option value="ALL">ALL</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
            </select>
            <div>
                {filteredProd.map((prod)=>(
                    <div key={prod.id} className="p-2 bg-blue-200 mt-5 rounded-xl">
                        <h2 className="text-2xl">{prod.name}</h2>
                        <h5 className="text-red-500">Price: {prod.price}</h5>
                        <p>Category: {prod.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

