import React, { useState } from "react";

function Toggle() {
  const [value, setValue] = useState("Jyoti");

  
  const toggleName = () => {
    if (value === "Jyoti") {
      setValue("Rohini");
    } else if (value === "Rohini") {
      setValue("Jyoti");
    } else {
      setValue("Jyoti"); 
    }
  };

  return (
    <div>
      <h1>My Updated Name: {value}</h1>
      <button onClick={toggleName}>Toggle Name</button>
    </div>
  );
}

export default Toggle
;
