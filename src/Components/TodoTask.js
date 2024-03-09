import React from "react";

const TodoTask = ({task, completeTask}) => {
    return (
        <div className = "task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <div>
                <button onClick={() => {
                    completeTask(task.taskName)
                }}>X</button>
            </div>
        </div>
    )
}

export default TodoTask