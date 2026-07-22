import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [showFinished, setshowFinished] = useState(false)

  useEffect(() => {
    let taskString = localStorage.getItem("tasks")
    if (taskString) {
      let tasks = JSON.parse(localStorage.getItem("tasks"))
      setTasks(tasks)
    }
  }, [])

  // save tasks to local storage
  const saveTasks = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    // Alert guard removed! The disabled button handles this now.
    let t = tasks.filter(i => i.id === id)
    setTask(t[0].task)
    let newTasks = tasks.filter(item => {
      return item.id !== id
    })
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  const handleDelete = (e, id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this task?");

    // Fixed bug: Stop the function if they click 'Cancel'
    if (!isConfirmed) return;

    let newTasks = tasks.filter(item => {
      return item.id !== id
    })
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  const handleSave = () => {
    if (task.trim() === "") {
      return; // Stop right here, don't save anything!
    }
    let newTasks = [...tasks, { id: uuidv4(), task, isCompleted: false }];

    setTasks(newTasks)
    setTask("")
    saveTasks(newTasks)
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = tasks.findIndex(item => {
      return item.id === id
    })
    if (tasks[index].isCompleted) {
      const isConfirmed = window.confirm("Are you sure you want to uncheck this finished task?")
      if (!isConfirmed) {
        return;
      }
    }
    let newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks(newTasks)
    saveTasks(newTasks)
  }

  // The magic variable!
  const isTyping = task.trim() !== "";

  return (
    <>
      <Navbar />
      <div className="main mx-auto my-4 p-5 rounded-2xl bg-blue-100 w-3/5 shadow-lg shadow-blue-200">

        {/* Adding the tasks */}
        <h2 className='font-bold text-lg text-blue-500'>Add a Task</h2>

        <div className="addTask m-3 flex justify-between">
          {/* Input of Task */}
          <input onChange={handleChange} value={task} type="text" className='bg-white w-4/5 mx-2 py-3 px-3 rounded-2xl placeholder-gray-400 ' placeholder="Enter today's task?" />

          {/* Save Button: Disabled when NOT typing */}
          <button onClick={handleSave} disabled={!isTyping} className=' mx-3 m-1 px-5 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed'>
            Save <MdAddTask className='text-xl' />
          </button>
        </div>

        {/* My saved tasks */}
        <h2 className='font-bold text-lg text-blue-500'>My Tasks</h2>
        <div className='flex items-center gap-3 m-3 text-blue-400 font-bold'>
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} className='cursor-pointer' /> Show Finished Tasks
        </div>

        <div className="tasks m-3 rounded-2xl bg-white">
          {tasks.length === 0 && <div className='p-3 text-gray-400'>No Tasks to display.</div>}
          {tasks.map(item => {

            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className='task px-3 py-1 flex items-center justify-between border-b-2 border-blue-100'>
                <div className='flex gap-4 items-center flex-1'>
                  {/* Checkbox */}
                  <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} className='mt-1 shrink-0 disabled:cursor-not-allowed cursor-pointer' disabled={isTyping} />

                  {/* Text of Task */}
                  <div className={`w-9/10 transition-all duration-300 ${item.isCompleted ? "text-green-700 italic opacity-70" : "text-gray-900 font-medium"}`}>
                    {item.task}</div>
                </div>

                {/* buttons to edit or delete tasks */}
                <div className="buttons">
                  <button title='Edit' onClick={(e) => handleEdit(e, item.id)} disabled={isTyping} className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>
                    <BiEdit className='text-lg' />
                  </button>
                  <button title='Delete' onClick={(e) => handleDelete(e, item.id)} disabled={isTyping} className='m-1 px-3 py-1 font-bold text-white text-sm bg-blue-500 rounded-2xl hover:bg-blue-600 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>
                    <MdOutlineDeleteOutline className='text-lg' />
                  </button>
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