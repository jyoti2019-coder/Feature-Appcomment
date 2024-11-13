import React, { useState } from "react";
 function Usestate()
 {
    let [value,setvalue]=useState(0)
  
  return(
      <>
      <div>
      <h1>Myupadate number:{value}</h1>
      <button onClick={()=>setvalue(value+1)}>Updated value</button>
      </div>
      </>
  )
}
 export default Usestate