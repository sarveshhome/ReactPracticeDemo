import { useEffect, useState } from "react";
import styless from './Counteruseeffect.module.css';

const Counteruseeffect =()=>{
    const [countnumber,setCountnumber]=useState(0);

    useEffect(()=>{
        document.title = `Clicked ${countnumber}`;
    });
    return(
        <div>
            <h1>Counter Number {countnumber}</h1>
            <button  onClick={()=> { setCountnumber(countnumber + 1)}} className={`${styless.button1 } ${styless.greenbutton1}`}  >Click me</button>
        </div>
    );

}

export default Counteruseeffect;