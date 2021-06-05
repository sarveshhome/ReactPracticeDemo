import React from 'react';

const Childa =(props)=>{

    return (
        <div>
            <h3>Child component </h3>
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
            </ul>            
        </div>
    );
}

export default Childa;