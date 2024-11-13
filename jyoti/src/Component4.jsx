import React from "react";
import Component5 from "./Component5";

function Component4( props){
    
    
    return(
        <><h1>The element of 4 is {props.data1}</h1>
        <Component5 data2={props.data1} />
        </>
    )
}
export default Component4;