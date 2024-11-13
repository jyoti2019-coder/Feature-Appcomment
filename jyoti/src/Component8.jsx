import React from "react";
import Component9 from "./Component9";

function Component8( props){
    
    
    return(
        <><h1>The element of 8 is {props.data5}</h1>
        <Component9 data6={props.data5} />
        </>
    )
}
export default Component8;