import React, { useState } from 'react'
import {useMutation} from '@tanstack/react-query'

const Loading_error = () => {
    let [mat, seetMat] = useState('')
    let {mutate, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: Asyncss
    })
    let handleSubmit = (e) => {
        e.preventDefault()
        mutate({mat})}
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={mat} placeholder='enter the matter'
        onChange={(r)=> seetMat(r.target.value)} />

        <button type='submit' disabled={isPending}>
            {isPending ? 'saving to server' : 'submit post'}
        </button>

        {isError && (
            <p style={{color: 'red'}}>Error : {error.message}</p>
        )}

        {isSuccess && (
            <p style={{color: 'green'}}>Post has created sucessfully !</p>
        )}
    </form>
  )
}

export default Loading_error

async function Asyncss(news) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(news),
      });
      if (!res.ok) throw new Error('Failed to save post to the server!');
    return res.json();
}