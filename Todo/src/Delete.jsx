import React, { useState } from "react";

function Delete() {
    let [todoText, setTodoText] = useState(""); 
    let [displayTodo, setDisplayTodo] = useState([]); 

    // Function to add a new item to the todo list
    function addItem() {
        if (todoText.trim() === "") return; 
        let tempArr = [...displayTodo]; 
        tempArr.push(todoText); 
        setDisplayTodo(tempArr); 
        setTodoText(""); 
    }

    // Function to delete an item from the todo list
    function deleteItem(index) {
        let updateTodo = [...displayTodo];
        updateTodo.splice(index, 1); 
        setDisplayTodo(updateTodo); 
    }


    function editItem(index) {
        
        const newText = prompt("Edit task:", displayTodo[index]); 
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

            
            <div>
                {displayTodo.map((ele, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <p>{index + 1}. {ele}</p>

                        
                        <button onClick={() => deleteItem(index)}>Delete</button>

                        
                        <button onClick={() => editItem(index)}>Edit</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Delete;
