import Navabar from './Navabar'
const About = () => {
  return (
    <div className='bg-blue-200 p-4  text-2xl text-center'>
        <Navabar/>
      <h1>Hello to the people of the world !</h1>
      <h1>Hola </h1>
      <Tailwinds/>
    </div>
  )
}

export default About

function Tailwinds() {
  return(
    <>
    <div className='bg-green-500 p-4  '>
        <h1>Hellow wolrd !</h1>
      </div>
      <div className="flex h-screen items-center justify-center bg-blue-500">
        <h1 className="text-4xl font-bold text-white underline">
          Tailwind CSS is Working!
        </h1>
    </div>
      <div className="flex h-screen items-center justify-center bg-green-500">
        <h1 className="text-4xl font-bold text-white underline">
          Tailwind CSS is Amazing!
        </h1>
    </div>
    </>
  )
}