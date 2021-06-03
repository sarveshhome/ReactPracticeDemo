import {Fragment, react, useState} from 'react';

const Counter =()=>{
    const [counter, setCounter] = useState(0);

    const counterHandler = ()=>{
        setCounter(counter +1);
    };

    return(
    <Fragment>
    <h1>
        Counter Value {counter}
        </h1>    
        <button onClick={counterHandler} value={counter} > Increate Me</button>
        <button onClick={counterHandler}  > Decreate Me</button>
    
    </Fragment>);
}

export default Counter;