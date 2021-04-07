import React from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Header from './components/Header'
import TaskListContextProvider from './components/TaskListContextProvider';


function App() {
  return (
    <TaskListContextProvider>
        <div className="container">
          <div className="app-wrapper">
          <Header />
            <div className="main">
            <TaskForm />
            <TaskList />
            </div>
          </div>
        </div>
    </TaskListContextProvider>
    
  );
}

export default App;
