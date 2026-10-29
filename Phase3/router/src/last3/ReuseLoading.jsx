import React from 'react'
import Button from './Button'
import Input from './Input'
import Card from './Card'

const ReuseLoading = () => {
  return (
    <div>
      <Button onClick={()=> alert("saved")} varient='p-4 bg-blue-400 m-2 text-2xl rounded-xl'>
        Save
      </Button>
      <Button varient='bg-green-500 p-3 m-1 text-xl'>
        Cancel
      </Button>
      <Button disable varient='bg-red-500 p-4 m-1 text-xl rounded-xl '>
        delete
      </Button><br />
      <Input 
        id="email"
        label="email"
        type="email"
        placeholder="Enter your email"
      /> <br />

      <Card title="User profile">
        <p>Name : sujith kumar gavathakatla</p>
        <p>Email : sujith1368@proton.me</p>
      </Card>
      <Card title="User profile">
        <p>Name : sreejas</p>
        <p>Email : sreeja@proton.me</p>
      </Card>


    </div>
  )
}

export default ReuseLoading
