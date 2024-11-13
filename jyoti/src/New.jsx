import React from "react";
import  { useState } from "react";



function New(){
    
 

       let [value,setValue]=useState("Jyoti")
         function toggleName()
          {
         setValue((prevValue)=>(prevValue==="Jyoti"?"Rohini":"Jyoti"));
        
          }
          
        
           return(
              <>
              
               <h1>My Upadate Name:{value}</h1>
               <button onClick={toggleName}>toggleName</button>
              
               </>
              )
         }
        
         export default New

