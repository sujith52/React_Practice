import UseQuerys from './useQuery/useQuerys'
import Post from './useMutation/Post'
import Loading_error from './useMutation/loading_error'
import Pagination from './useMutation/Pagination'
import Users from './axios/Users'
import BaseUrl from './axios/BaseUrl'

function App() {
  return(
    <>
      {/* <UseQuerys/>
      <Post/>
      <Loading_error/>
      <Pagination/> */}
      <Users/>
      <BaseUrl/>
    </>
  )
}



export default App
