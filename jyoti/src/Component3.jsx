import React from "react";
import Component4 from "./Component4";
 
 
function Component3(props){
    return(
        <>
        <h1>The element of 3 is {props.data}</h1>
        <Component4 data1={props.data} />
        </>
    )
}
export default Component3;