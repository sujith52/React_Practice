import React from 'react'
import {Button} from '../components/ui/button'

const Page1 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Shadcn App is Ready! 🚀</h1>
      <Button variant="default">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link" size='sm'>Click me</Button>
    </div>
  )
}

export default Page1
