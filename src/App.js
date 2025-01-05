import logo from './logo.svg';
import './App.css';
import Title from './component/Title';
import DataTable from './component/DataTable';
import { useState } from 'react';
import { createContext } from 'react';
import Main from './page/Main'
import  {TaskContext} from './statemanagement/CreateContext'
import CommonModalLoader from './component/CommonModalLoader';
function App() {
  const [render,setRender]=useState(false)
  
  return (

    <div className="App">
      <header className="App-header">
        <TaskContext.Provider value={{render,setRender}}>
          <Main/>
  
      </TaskContext.Provider>

      </header>
    </div>
  );
}

export default App;
