import React, { useContext, useEffect, useState } from 'react'
import {TaskListContext} from './TaskListContextProvider'

function TaskForm() {

    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext)

    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editItem){
            addTask(title);
            setTitle("");
        }  else {
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title)
        } else {
            setTitle("")
        }
    }, [editItem])
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                value={title}
                onChange={handleChange}
                type="text" 
                className="task-input" 
                placeholder="Add Task..." 
                required/>
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button className="btn clear-btn" onClick={clearList}>Clear</button>
            </div>
            
        </form>
    )
}

export default TaskForm
