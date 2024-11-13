import React from "react";
import Component7 from "./Component7";

function Component6( props){
    
    
    return(
        <><h1>The element of 6 is {props.data3}</h1>
        <Component7 data4={props.data3} />
        </>
    )
}
export default Component6;