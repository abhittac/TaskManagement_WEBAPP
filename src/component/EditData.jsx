import React, { useContext, useState } from 'react';
import { db } from '../firebase';
import { ref, update } from 'firebase/database';
import EditTaskModal from './EditTaskModal';
import TaskContext from '../context/TaskContext';
const EditData = () => {
  const {render,setRender,task,setTask}=useContext(TaskContext)

  const handleEdit = (id) => {
    const dataRef = ref(db, 'users/' + id); // Path to the data you want to update

    update(dataRef, {
      task: task, // Update the 'name' field
    })
      .then(() => {
        alert('Data updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div>
      
      <button
      type='button'
        onClick={() => handleEdit('user_id')} // Replace 'user_id' with the actual ID
           className="px-4 py-2 text-blue-500 text-white rounded-lg"
      >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

      </button>
    </div>
  );
};

export default EditData;
