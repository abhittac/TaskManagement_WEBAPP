import './App.css';
import { useState } from 'react';
import Main from './page/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {TaskContext} from './context/CreateContext'
import Login from './page/Login';
function App() {
  const [render,setRender]=useState(false)
  
  return (

    <div className="App">
      <header className="App-header">
        <TaskContext.Provider value={{render,setRender}}>
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Main />} />
      </Routes>
    </Router>
  
      </TaskContext.Provider>

      </header>
    </div>
  );
}

export default App;
