import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import DeleteData from './DeleteData';
import { TaskContext } from '../context/CreateContext';
import EditTaskModal from './EditTaskModal';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { render, setRender, task,  } = useContext(TaskContext);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "task"));
      const dataArray = [];

      querySnapshot.forEach((doc) => {
        dataArray.push({ ...doc.data(), id: doc.id });
      });
      setData(dataArray);
    };

    fetchData();
  }, [render]);

  // const handleEdit = (item) => {
  //   setTask(item);
  //   setIsOpen(true);
  // };

  const handleSave = async (updatedTask) => {
    const taskRef = doc(db, "task", updatedTask.id);
    await updateDoc(taskRef, updatedTask);
    setRender(!render);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <EditTaskModal
        isOpen={isOpen}
        onClose={handleClose}
        task={task}
        onSave={handleSave}
      />
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-black">S.No</th>
            <th className="px-4 py-2 text-black">Task</th>
            <th className="px-4 py-2 text-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index + 1} className="bg-white text-black border-b">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.title}</td>
              <td className="text-right">
                <div className="flex items-center justify-center space-x-4">
                  {/* <button
                    onClick={() => handleEdit(item)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button> */}
                  <DeleteData render={render} setRender={setRender} id={item.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
