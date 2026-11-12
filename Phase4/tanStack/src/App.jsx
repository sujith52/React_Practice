import UseQuerys from './useQuery/useQuerys'
import Post from './useMutation/Post'
import Loading_error from './useMutation/loading_error'
import Pagination from './useMutation/Pagination'

function App() {
  return(
    <>
      <UseQuerys/>
      <Post/>
      <Loading_error/>
      <Pagination/>
    </>
  )
}



export default App
