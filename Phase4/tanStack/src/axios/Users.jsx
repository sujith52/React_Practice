import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Users(){
    let [users, setUsers] = useState([])
    let [load, setLoad] = useState(true)
    let [err, setErr] = useState("")

    useEffect(()=>{
        async function fetchUsers (){
            try {
                let response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                )
                setUsers(response.data)
            } catch (err) {
                setErr(`failed to load error is ${err}`)
            } finally {
                setLoad(false)
            }
        }

        fetchUsers()
    },[])

    if(load) return <h1>It is loading bro, just wait a sec !</h1>

    if(err) return <h1 style={{color: 'red'}}>The api fetching was failed to load the response so try again !</h1>

    return(
        <div>
            <h1>Users list :</h1>
            {users.map((u)=>(
                <div key={u.id}>
                    <h2>{u.name}</h2>
                    <p>{u.username}</p>
                    <p>{u.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Users
