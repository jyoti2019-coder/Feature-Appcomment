import React from "react";
function State() {
 

      let [value,setvalue]=useState(0)
      function Handeler()
      {
     console.log("clicked");
     setvalue(value+1);
       }
      
    
       return(
          <>
          
          <h1>Myupadate number:{value}</h1>
         <button onClick={()=>Handeler()}>Updated value</button> 
          
           </>
       )
     }
    
     export default State;