import { useState } from "react"
import  React from 'react'
// import Component1 from './Component1';
// import Component2 from './Component2';
// import Component3 from './Component3';
// import Increment from './Increment';
// import Updatevalue  from './Updatevalue';
// import Decrement from './Decrement';
// import Newlog from './Newlog';
import Task from './Task';
import New from "./New";
import ToggleText from './ToggleText';
import Toggle from "./Toggel";
import Form  from './Form'
 import MultiInputForm from './MultiInputForm'
import Password from "./Password";
import Pass from "./Pass";
function App(){

    return(
     <>
     {/* <Pass/> */}
      <Password/>
     {/* <Decrement/> */}
     {/* <Updatevalue/> */}
    {/* <Increment/> */}
     {/* <Component1 info={x}/> */}
     {/* <Component2 info={x}/>
    <Component3 info={x}/> */}
      {/* <Task/> */}
      {/* <New/> */}
      {/* <ToggleText/> */}
      {/* <Toggle/> */}
      {/* {<Form/>} */}
      {/* <MultiInputForm/> */}

   </> )
 }
 export default App


// function App() {
 

//   let [value,setvalue]=useState(0)
//   function Handeler()
//   {
// console.log("clicked");
// setvalue(value+1);
//   }
  

//   return(
//       <>
      
//       <h1>Myupadate number:{value}</h1>
//       <button onClick={()=>Handeler()}>Updated value</button> 
      
//       </>
//       )
// }

// export default App
// function App()
// {
//     let [task, settask] = useState("Jyoti");
//     function Handeler(){
//         console.log ("click");
//         settask("Rohini");
//     }
//     return(
//     <>
//     <h1>My name is :{task}</h1>
//     <button onClick={()=>Handeler()}>UpdatedName</button>
//     </>
//     )
// }
// export default App;