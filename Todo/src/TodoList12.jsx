import
   React from "react";
import { useState } from 'react';
function TodoList12() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
function DisplayInfo()
{
  let tempArray=[...newTask];
  tempArray.push(tasks);
  setNewTask(tempArray);

}

let addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
       setNewTask('');
    }

  };
  let DeleteTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
       setNewTask('');
    }

  };
  let editTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
       setNewTask('');
    }

  };return (
    <>
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-background rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">Todo List App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter Task"
          className="w-full p-2 pl-10 text-sm text-text bg-white border border-gray-300 rounded"
        />
        <button
          onClick={addTask}
          className="ml-2 p-2 text-sm text-gray bg-primary rounded hover:bg-secondary"
        >
          + ADD
        </button>
        <button 
        onClick={DeleteTask}
        className="ml-2 p-2 text-sm text-gray bg-primary rounded hover:bg-secondary"
        >
          - Delete
        </button>
        <button 
        onClick={editTask}
        className="ml-2 p-2 text-sm text-gray bg-primary rounded hover:bg-secondary"
        >
          Edit
        </button>
      </div>
      </div>
      </>)
}
export default TodoList12;