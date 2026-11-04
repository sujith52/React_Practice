import { useState } from 'react'
import {useQuery} from '@tanstack/react-query'
import Mying from './image/load.png'


function App() {
  let [id, setId] = useState(1)
  let {data, isFetching, refetch, error} = useQuery({
    queryKey: ['todos',id],
    queryFn: ()=> getTodos(id)
  })
  if(error)  {alert(`something went wrong ${error}`)}

  return(
    <div>
      { isFetching ? 
      <img src={Mying} alt="Loads image" /> : 
       JSON.stringify(data.slice(0,5))}
       <br />
       <button onClick={()=> refetch()}>refectch</button><br />
       <button onClick={()=> setId((p)=> p +1)}>Icrement id</button>
    </div>
  )
}

let getTodos = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  return await response.json()
}

export default App
