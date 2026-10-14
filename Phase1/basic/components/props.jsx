function Names(props){
    return(
        <h1>Welcome {props.name} bro !</h1>
    )
}

function Books({name,author}){
    return(
        <>
        <h2>
            <ul>
                <li>{name} : <i>{author}</i></li>
            </ul>
        </h2>
        </>
    )
}

function RestaurantCard({name = 'undefined', rating = 0, time = 'calculating'}){
    return(
        <div style={{color:'blue', display:'flex' , flexDirection:'row', alignItems:'center', gap:'5px'}}>
            <h2>Restaurant Name : {name}</h2>
            <h3>Rating : {rating} / 5.0</h3>
            <h4>Time to Reach : {time} min</h4>
        </div>
    )
}

function ChildrenProps({children}){
    return(
        <div style={{color:'green'}}>
            {children}
        </div>
    )
}

function Restatunts(){
    let data =[
        {id:1, name:'pitas babachi', rating:4.5},
        {id:4, name:'babuchi biryani', rating:3.9},
        {id:3, name:'megana biryani', rating:5},
        {id:2, name:'swad biryani', rating:3.9},

]
    return(
        <div>
            <h1>Restaurants :</h1>
            {data.map(da=>(
                <div key={da.id} style={{display:'flex' , gap:'10px', alignItems:'center'}}>
                    <h3>{da.name}</h3>
                    <p>Rating : {da.rating}</p>
                </div>
            ))}
        </div>
    )
}

function ResCard({name, cousine, rating}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{cousine}</h5>
            <p>{rating}</p><hr />
        </div>
    )
}

function Resdatas(){
    let datas = [
        {name:'mandi house', cousine:'indian', rating:4.5},
        {name:'chicken house', cousine:'italian', rating:4.5},
    ]

    return(
        <div>
            {datas.map(res=>(
                <ResCard name={res.name} cousine={res.cousine} rating={res.rating} />
            ))}
        </div>
    )
}

function Conditional(){
    let isLoggedin = true
    let loading = false
    if(loading){
        return <h2>It is loading bro </h2>
    }
    return(
        <div>
            <h1>Restratunt</h1>
            {isLoggedin && <h2>Welcome Sujith Bro !</h2>}
            {isLoggedin ? <p>Hello welcome bro</p> :<p>Login at first bro !</p>}
        </div>
    )
}