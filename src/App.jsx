import { use, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  useEffect(() => {
    let taskString = localStorage.getItem("tasks")
    if(taskString){
      let tasks = JSON.parse(localStorage.getItem("tasks"))
      setTasks(tasks)
    }
  }, [])
  // save tasks to local storage
  const saveTasks = (updatedTasks) =>{
    localStorage.setItem("tasks",JSON.stringify(updatedTasks))
  }
  const toggleFinished =()=>{
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    if (task.trim() !== "") {
      alert("Please save your current task before editing another one!");
      return; 
    }
    let t = tasks.filter(i=>i.id===id)
    setTask(t[0].task)
    let newTasks = tasks.filter(item=>{
      return item.id !== id
    })
    setTasks(newTasks)
    saveTasks(newTasks)
  }
  const handleDelete = (e, id) => {
    let newTasks = tasks.filter(item=>{
      return item.id !== id
    })
    setTasks(newTasks)
    saveTasks(newTasks)
  }
  const handleSave = () => {
    if (task.trim() === "") {
      return; // Stop right here, don't save anything!
    }
    let newTasks = [...tasks, {id: uuidv4(), task, isCompleted: false}];
    
    setTasks(newTasks)
    setTask("")
    saveTasks(newTasks)
  }
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = tasks.findIndex(item=>{
      return item.id === id
    })
    let newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  return (
    <>
      <Navbar />
      <div className="main mx-auto my-4 p-5 rounded-2xl bg-blue-100 w-1/2 shadow-lg shadow-blue-200">

        {/* Adding the tasks */}
        <h2 className='font-bold text-lg text-blue-500'>Add a Task</h2>

        <div className="addTask m-3">
          {/* Input of Task */}
          <input onChange={handleChange} value={task} type="text" className='bg-white w-1/2 mx-2 p-1 px-3 rounded-2xl placeholder-gray-400 ' placeholder="Enter today's task?"/>
          <button onClick={handleSave} className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer'>Save</button>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished Tasks

        {/* My saved tasks */}
        <h2 className='font-bold text-lg text-blue-500'>My Tasks</h2>
        
        <div className="tasks m-3 rounded-2xl bg-white">
          {tasks.length === 0 && <div className='p-3 text-gray-400'>No Tasks to display.</div>}
          {tasks.map(item=>{
          
          return (showFinished || !item.isCompleted) && (
          <div key={item.id} className='task px-3 py-1 flex items-center justify-between border-b-2 border-blue-100'>
            <div className='flex gap-4 items-center flex-1'>
            {/* Checkbox */}
            <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} className='cursor-pointer' />
            {/* Text of Task */}
            <div className={`w-9/10 ${item.isCompleted?"line-through":""}`}>{item.task}</div>
            </div>

            {/* buttons to edit or delete tasks */}
            <div className="buttons">
            <button onClick={(e)=>handleEdit(e, item.id)} className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer'>Edit</button>
            <button onClick={(e)=> handleDelete(e, item.id)} className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer'>Delete</button>
            </div>
          </div>
          )
          })}
        </div>

      </div>
    </>
  )
}

export default App
