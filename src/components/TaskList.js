import React, { useContext } from 'react'
import Task from './Task'
import {TaskListContext} from './TaskListContextProvider'

function TaskList() {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
        {
            tasks.length ? (
                <ul className="list">
                {
                    tasks.map((task) => {
                        return <Task key={task.id} index={task.id} task={task}/>
                    })
                }
                </ul>
            ) : (
                <div className="no-tasks">No Tasks</div>
            )
        }
            
        </div>
    )
}

export default TaskList
