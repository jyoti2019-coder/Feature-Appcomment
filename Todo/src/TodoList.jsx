import React, { useState } from 'react';

function Todo123() {
    let [todoText, setTodoText] = useState("");
    let [displayTodo, setDisplayTodo] = useState([]);
    
    
    function addItem() {
        if (todoText.trim() === "") return; 
        let tempArr = [...displayTodo];
        tempArr.push(todoText);
        setDisplayTodo(tempArr);
        setTodoText(""); 
    }

    
    function deleteItem(index) {
        let updatedTodos = [...displayTodo];
        updatedTodos.splice(index, 1);
        
        setDisplayTodo(updatedTodos);
    }

    
    function editItem(index) {
    let newText = prompt("Edit task:", displayTodo[index]); 
    if (newText && newText.trim()) {
      const updatedTodos = [...displayTodo];
      updatedTodos[index] = newText; 
      setDisplayTodo(updatedTodos);
    }
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Todo List App</h1>
            
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Enter Task"
            />
            <button onClick={addItem}>ADD</button>

            {/* Display the list of todos */}
            <div>
                {displayTodo.map((ele, index) => (
                    <div key={ind} style={{ marginBottom: '10px' }}>
                        <p>{ind + 1}. {ele}</p>
                        <button onClick={() => deleteItem(index)}>Delete</button>
                        <button onClick={() => editItem(index)}>Edit</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todo123;
