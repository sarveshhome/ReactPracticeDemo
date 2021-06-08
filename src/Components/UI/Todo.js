import { useState } from 'react';
import styles from './Todo.module.css';



const Todo =()=>{
    const [todofinaldata,setTodofinaldata] = useState();
    const [todovalue,setTodoValue] = useState('');
    const [todoid, setTodoid]= useState(0);    
    let itemToRender;

    const todoEnterHandler =(event)=>{
        setTodoValue(event.target.value);
    }

    const todoHandler =(event)=>{
        event.preventDefault();
        setTodofinaldata( 
                {id:todoid,
                todovalue:todovalue}
            
        );
        //setTodoValue();
        setTodoid(todoid +1);       
       
    }

   
   
    if(todofinaldata){
        console.log(todofinaldata);      
    }
    else {
       
      }

    return ( 
        <div className="container">
            <div className="row">
             <div className="buttonsubmit">
                <form onSubmit={todoHandler}>
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
                    if(todofinaldata){
                    itemToRender = todofinaldata.map(data =>{
                         <li key={data.id}> data.todovalue</li>
                     })
                   }
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;