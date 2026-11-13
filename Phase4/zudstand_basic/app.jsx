import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { create } from 'zustand';


let useTaskStore = create((set)=>({
    tasks : [
        {id : 1, title: 'Emperror domination', completed : false},
        {id : 2 , title : 'reverand insanity', completed : true},
        {id : 2 , title : 'douluo dalu', completed : true},
    ],

    addTask: (title) => set((state)=>({
        tasks: [...state.tasks, {id: Date.now(), title, completed: true}]
    }))
}))

let Display = () => {
    let tasks = useTaskStore((state) => state.tasks)
    return(
        <div className=''>
            {tasks.map((u)=>(
                <div key={u.id} className='p-2'>
                    <ul className='pl-5 list-disc list-outside '>
                        <li>{u.title}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

let AddTasks = () => {
    let [text, setText] = useState('')
    let addTask = useTaskStore((state)=> state.addTask)
    let handleSubmit=(e)=>{
        e.preventDefault()
        if (!text.trim()) return
        addTask(text)
        setText('')
    }

    return(
        <div className='p-4'>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Enter the text ' 
                value={text}
                onChange={(e)=> setText(e.target.value)}
                className='p-4 bg-blue-200 text-xl text-green-800 border border-blue-400' />
                <button type='submit' className='p-4 bg-green-200'>Add Task</button>
            </form>
        </div>
    )
}

let App = () => {
    return(
        <div className='h-screen bg-blue-200 text-xl '>
            <h1 className='text-2xl text-center p-2'>Zustand Practice</h1>
            <AddTasks/>
            <Display/>
            
        </div>
    )
}

const cont = document.getElementById('root');
const root = createRoot(cont);
root.render(
    <>
        <App/>
    </>
);
