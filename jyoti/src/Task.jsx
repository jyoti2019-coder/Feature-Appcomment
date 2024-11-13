import React from "react";
import  { useState } from "react";


function Task()
{
    let [task, settask] = useState("Jyoti");
    function Handeler(){
        console.log ("click");
        settask("Rohini");
    }
    return(
    <>
    <h1>My name is :{task}</h1>
    <button onClick={()=>Handeler()}>UpdatedName</button>
    </>
    )
}
export default Task;