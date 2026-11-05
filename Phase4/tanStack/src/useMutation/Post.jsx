import React, { useState } from 'react'
import {useMutation, useQueryClient} from '@tanstack/react-query'

const Post = () => {
    let [title, setTitle] = useState('')
    let queryClient = useQueryClient()

    let mutation = useMutation({
        mutationFn : postPost,
        onSuccess: ()=>{
            setTitle('')
            console.log(`Post has created sucessfully bro !`)
        }
    })

  return (
    <div>
      <input type="text" placeholder='post title...' value={title} onChange={(e)=> setTitle(e.target.value)} />
      <button
        onClick={()=>{
            mutation.mutate({title, body:'Hellow world', userId:1})
        }}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'saving' : 'Create Post .'}
      </button>
      {mutation.isSuccess && <p>Sucessfully added post ID : {mutation.data.id}</p>}
    </div>
  )
}

export default Post

async function postPost(newpost) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newpost)
    })
    return res.json()
}

