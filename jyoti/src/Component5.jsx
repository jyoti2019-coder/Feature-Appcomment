import React from "react";
import Component6 from "./Component6";

function Component5( props){
    
    
    return(
        <><h1>The element of 5 is {props.data2}</h1>
        <Component6 data3={props.data2} />
        </>
    )
}
export default Component5;