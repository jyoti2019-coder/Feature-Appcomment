import React, { useState } from "react";

function New() {
  const [value, setValue] = useState("Jyoti");

  
  const toggleName = () => {
    switch (value) {
      case "Jyoti":
        setValue("Rohini");
        break;
      case "Rohini":
        setValue("Jyoti");
        break;
      default:
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

export default New;
