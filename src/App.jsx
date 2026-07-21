import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="main mx-auto my-3 p-5 rounded-2xl bg-blue-100 w-1/2">

        <h2 className='font-bold text-lg text-gray-800'>Add a Task</h2>

        <div className="addTask m-3">
          <input type="text" className='bg-white w-1/2 mx-2 p-1 px-3 rounded-2xl placeholder-gray-400 ' placeholder="Enter today's task?"/>
          <button className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer'>Save</button>
        </div>

        <h2 className='font-bold text-lg text-gray-800'>Your Tasks</h2>

        <div className="tasks m-3 rounded-2xl bg-white">
          <div className='px-3 py-1 task flex items-center justify-between border-b-2 border-blue-100'>
            <div className="text"></div>
            <div className="buttons">
            <button className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer'>Edit</button>
            <button className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer'>Delete</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
