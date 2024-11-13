// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Newlogo from './Newlogo'
// import Section from './Section'

// import Center from './Center'
// import Usestate from'./Usestate'
import React from "react";

function App() {
 

  //let [value,setvalue]=useState(0)
  function Handeler()
  {
console.log("clicked");
  }
  

  return(
      <>
      
      <h1>Myupadate number:0</h1>
      <button onClick={()=>Handeler()}>Updated value</button> 
      
      </>
      )
}

export default App
