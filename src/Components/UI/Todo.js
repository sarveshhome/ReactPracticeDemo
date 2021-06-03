import styles from './Todo.module.css';

const todoHandler =(event)=>{
    event.preventDefault();
   console.log('form submit');
}

const Todo =()=>{
    return (        
            <form onSubmit={todoHandler}>
                <div className={styles.todo}>
                    <h1>ToDo</h1>
                    <input name="todoName" type="text"/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>        
    );
}

export default Todo;