import React, { useState } from 'react';
import './App.css';
import TodoTask from "./Components/TodoTask"

const App = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

  const addTask = () => {
    const newTask = { taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);

  };

  const completeTask = (taskNameToDelete) => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task.." name="task" value={task} onChange={handleChange}/>
          <input type="number" placeholder="Deadline (in days)" name="deadline" value={deadline} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {
          todoList.map((task, key) => {
            return <TodoTask key={key} task={task} completeTask={completeTask}/>;
          })
        }
      </div>
    </div>
  );
}

export default App;
