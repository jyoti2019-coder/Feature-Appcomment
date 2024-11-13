import React from "react";
import Component2 from "./Component2";
 function Component1(props){
return(
<>
<h1 >The value of 1 is {props.info}</h1>
<Component2 newInfo = {props.info}/>
</>

    )
 }
 export default Component1
 