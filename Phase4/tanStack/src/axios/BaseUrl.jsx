import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from './url'

const BaseUrl = () => {
    let [posts, setPosts] = useState([])

    useEffect(()=>{
        async function fetchPosts(){
            let response = await url.get('/posts')
            setPosts(response.data)
        }

        fetchPosts()
    },[])
  return (
    <div><hr />
        <h1>Posts from the users :</h1>
      {posts.map((u)=>(
        <div key={u.id}>
            <h3>{u.title}</h3>
            <p>{u.body}</p>
        </div>
      ))}
    </div>
  )
}

export default BaseUrl
