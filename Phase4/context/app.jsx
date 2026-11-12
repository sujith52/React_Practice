let {useState, createContext, useContext} = React

let CartContext = createContext()

function CartProvider({children}){
    let [cart, setCart] = useState([])

    let addToCart = (prod) =>{
        setCart((prev)=> [...prev, prod])
    }

    let removeCart = (id)=>{
        setCart((prev)=>
            prev.filter((item) => item.id !== id)
        )
    }

    return(
        <CartContext.Provider
        value={{cart,addToCart, removeCart}}>
            {children}
        </CartContext.Provider>
    )
}

function Navbar(){
    let {cart} = useContext(CartContext)
    return(
        <div>
            <h2 className="text-3xl text-center m-2 p-2 bg-blue-200">My shopping app</h2>
            <h3>Cart : {cart.length}</h3>
        </div>
    )
}

function ProductCard(){
    let {addToCart} = useContext(CartContext)
    let product = {
        id: 1,
        name: "Laptop",
        price: 50000
    }

    return(
        <div>
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            <button onClick={()=> addToCart(product)}
            className="p-4 m-1 bg-green-100 rounded-xl ">Add to cart</button>
        </div>
    )
}

function Cart(){
    let {cart, removeCart} = useContext(CartContext)
    return(
        <div>
            <h2>Shoping cart </h2>
            {cart.map((item,index)=>(
                <div key={`${item.id} - ${index}`}>
                    <h1>{item.name}</h1>
                    <h3>{item.price}</h3>
                    <button onClick={()=> removeCart(item.id)}
                    className="p-4 m-1 bg-red-500 rounded-xl">
                        Remove from cart !
                    </button>
                </div>
            ))}
        </div>
    )
}

let cont = document.getElementById('root')
let root = ReactDOM.createRoot(cont)
root.render(
    <>
        <CartProvider >
            <Navbar/>
            <ProductCard/>
            <Cart/>
        </CartProvider>
    </>
)

