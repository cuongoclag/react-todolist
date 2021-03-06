import React, { createContext, useEffect, useState } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext();
function TaskListContextProvider(props) {

    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)

    const [editItem, setEditItem] = useState(null)

    const addTask = (title) => {
        setTasks([...tasks, {title, id: tasks.length + 1}])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([])
    }

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item)
    }


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    const editTask = (title, id) => {
        const newTask = tasks.map(task => (
            task.id === id ? {title, id} : task
        ))
        setTasks(newTask);
        setEditItem(null)
    }
    return (
        <TaskListContext.Provider 
            value={{
                tasks, 
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
