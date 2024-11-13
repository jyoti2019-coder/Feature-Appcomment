import React from "react";
import Component3 from "./Component3";

function Component2( props){
    console.log(props);
    
    return(
        <><h1>The element of 2 is {props.newInfo}</h1>
        <Component3 data={props.newInfo} />
        </>
    )
}
export default Component2;