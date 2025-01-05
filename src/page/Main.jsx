import React from 'react'
import Title from '../component/Title'
import DataTable from '../component/DataTable'
import { TaskContext } from '../statemanagement/CreateContext'


export default function Main() {
  const [task, setTask] = useState('')
  const [render,setRender] = useState(false)
  const contextData={
    task,
    setTask,
    render,
    setRender
  }
  return (
    <div>
      <TaskContext.Provider value={contextData}>
        <Title />
        <DataTable/>
      </TaskContext.Provider>
    </div>
  )
}
