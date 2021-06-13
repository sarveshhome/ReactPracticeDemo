import { useState,useEffect } from 'react';
import styles from './Todo.module.css';




const Todo =()=> {
    const [todofinaldata,setTodofinaldata] = useState([]);
    const [todovalue,setTodoValue] = useState('');
    const [todoid, setTodoid]= useState(1);    
    let itemToRender;
    

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
        console.log(todofinaldata);
        // Update the console in web browser
        console.log('useEffect call');
    },[todofinaldata]);

    
    const todoEnterHandler =(event)=>{
        setTodoValue(event.target.value);              
    }

    const todoFormHandler =(event)=>{
        event.preventDefault();

        const final = [...todofinaldata, {id:todoid,todovalue:todovalue}];
        console.log(final);
        setTodofinaldata(final);        
        setTodoid(todoid +1);                     
    }

    return ( 
        <div className="container">
            <div className="row">
             <div className="buttonsubmit">
                <form onSubmit={todoFormHandler}>
                    <div className={styles.todo}>
                        <h1>ToDo</h1>
                        <input name="todoName" onChange={todoEnterHandler} type="text"/>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>  
            </div> 
            </div>       
            <div className="row">
                <div className="todolist">
                    <ul>
                   {       
                    todofinaldata && todofinaldata.map((data)=>
                    (                        
                         <li key={data.id}> {data.todovalue}</li>
                    ))
                    }
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;