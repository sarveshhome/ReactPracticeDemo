import {Fragment, useState} from 'react';
import styles from './Counter.module.css';
import Counteruseeffect from './Counteruseeffect';

const Counter =()=>{
    const [counter, setCounter] = useState(0);

    const increaseHandler = ()=>{
        setCounter(counter +1);
    };

    const decreaseHandler =()=>{
        setCounter(counter - 1);
    }

    return(
        <Fragment>
            <h1>Counter Value {counter}</h1>
            <button onClick={increaseHandler} value={counter} className={`${styles.button } ${styles.greenbutton}`} >Increase Me</button>
            <button onClick={decreaseHandler} value={counter} className={`${styles.button } ${styles.redbutton}`} >Decreate Me</button>      

            <hr></hr>
            <div>Counter value by UseEffect</div>
            <Counteruseeffect/>
       </Fragment>
    );
}

export default Counter;