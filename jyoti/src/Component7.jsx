import React from "react";
import Component8 from "./Component8";

function Component7( props){
    
    
    return(
        <><h1>The element of 7 is {props.data4}</h1>
        <Component8 data5={props.data4} />
        </>
    )
}
export default Component7;