import React from "react";
import { useState } from 'react';
function Todo123() {
    let [todoText, setTodoText] = useState("");
    let [displayTodo, setDisplayTodo] = useState([]);
    function addItem() {
        let tempArr = [...displayTodo];
        tempArr.push(todoText);
        setDisplayTodo(tempArr);

    }
    console.log("new arr", displayTodo)
    function DeleteItem(){
        let updateTodo=[...displayTodo];
        updateTodo.pop();
        setDisplayTodo(updateTodo);
    }
    return (
        <>
          <h1 className="text-3xl font-bold mb-4">Todo List App</h1>

            <input
                type="text"
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Enter Task"
                
            />
            <button  onClick={() => addItem()}>
                ADD
            </button>
            {
                displayTodo.map((ele, ind) => {
                    return (<>
                        <p>{ind + 1}.{ele}</p>
                        <button onChange={()=> DeleteItem()}>Delete</button>
                        {
                            console.log("delete item ",ele)
                        }
                        <button>Edit</button>
                    </>)
                })
            }



        </>
    )
}
export default Todo123;