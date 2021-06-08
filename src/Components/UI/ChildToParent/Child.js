import React from "react";

const Child = (props)=>{
    return(
        <input type="text" onBlur={props.handleChange}></input>
    );
}
export default Child;