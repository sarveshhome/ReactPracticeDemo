import React, { useState } from 'react';
import Child from './Child';


const Parent = ()=>{
    const [text,setText]= useState('');
    const  changeInParentHandler = (event)=>{
console.log(event);
        setText(event.target.value);
    }
    return(
        <div>
        <h1>{text}</h1>
        <Child handleChange={changeInParentHandler}></Child>
        </div>
    );
}

export default Parent;