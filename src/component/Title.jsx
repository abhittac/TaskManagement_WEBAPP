import { addDoc ,collection} from 'firebase/firestore';
import { db } from '../firebase';
import React, { useContext } from 'react'
import { TaskContext } from '../statemanagement/CreateContext';
export default function task() {
  
    const {render,setRender,task,setTask}=useContext(TaskContext)
    const handleSubmit=async (e)=>{
      
        e.preventDefault();
        if(task!==''){
            await addDoc(collection(db, "task"), {
                task: task,
                completed: false
            });

            alert('Document successfully added!');
        setRender(!render)
        setTask('')  
        }
    }
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col">
    <div className="flex justify-between items-center"> 
  <label htmlFor="task-input" className="text-white-700 font-bold mb-2">
    Add Your Task
  </label>

</div>
<div>

<input
          type="text"
          id="task-input"
          value={task}
          required
          onChange={(e)=>setTask(e.target.value)}
          placeholder="Enter your task"
          className='px-4 mr-2 text-black mb-2 h-18  py-4 md:px-8 md:py-4  md:text-lg rounded-lg'
        //   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
          <button type='submit' className="px-4 h-18  py-4 md:px-8 md:py-4 text-sm md:text-lg bg-blue-500 text-white rounded-lg">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className="w-6 h-25 inline-block"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    
  </button>
</div>
    </div>
  </form>
  )
}
