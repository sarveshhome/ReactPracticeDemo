import { useState,useEffect } from 'react';
import styles from './Todo.module.css';
import { Container,Form,Button, Row, ListGroup, Col, FormGroup } from 'react-bootstrap';



const Todo =()=> {
    const [todofinaldata,setTodofinaldata] = useState([]);
    const [todovalue,setTodoValue] = useState('');
    const [todoid, setTodoid]= useState(0);    
    let itemToRender;
    

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
       // console.log(todofinaldata);
        // Update the console in web browser
        console.log('useEffect call');
    },[todofinaldata]);

    
    const todoEnterHandler =(event)=>{
        setTodoValue(event.target.value);              
    }
    const tododeleteHandler =(index)=>{
        const answer =window.confirm('Do you want to delete ');        
            if (answer) {
                //first logic
                const newTodo = todofinaldata.filter(data => { return data.id !== index});
                setTodofinaldata(newTodo);
                
                ///second logic

                // const newTodo=[...todofinaldata];
                // newTodo.splice(index,1);
                // setTodofinaldata(newTodo);
                // console.log(index);
            }
            else {
                
            }
       
    }

    const todoFormHandler =(event)=>{
        event.preventDefault();

        const final = [...todofinaldata, {id:todoid,todovalue:todovalue}];
        console.log(final);
        setTodofinaldata(final);        
        setTodoid(todoid +1);  
        setTodoValue('');
    }

    return ( 
        <div className={Container}>
            <div className={Row}>
             <div className="buttonsubmit">
                <form  onSubmit={todoFormHandler}>  
                    {/* <div className={styles.todo}>
                        <h1>ToDo</h1>
                        <input name="todoName" onChange={todoEnterHandler} type="text"/>
                        <input type="submit" value="Submit"/>
                    </div> */}
                                    
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Todo</Form.Label>
                                <Col>
                                    <Form.Control type="text" value={todovalue} placeholder="Enter Todo" onChange={todoEnterHandler} />
                                </Col>
                                <Col>
                                    <Form.Text className="text-muted">                                
                                        Todo Text
                                    </Form.Text>
                            </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>  
            </div> 
            </div>       
            <div className={Row}>
                <div className={FormGroup}>
                    {
                   /*<ul className={ListGroup}>
                   {       
                    todofinaldata && todofinaldata.map((data)=>
                    (                        
                         <li className={ListGroupItem} key={data.id}> {data.todovalue}</li>
                    ))
                    }
                </ul> */}
                  
                <ListGroup>
                    <br></br>
                <ListGroup.Item as="li" active>
                        Todo List
                    </ListGroup.Item>
                    {       
                        todofinaldata && todofinaldata.map((data)=>
                        (   
                            <ListGroup.Item  onClick={() => tododeleteHandler(data.id)} variant="success" key={data.id}>{data.todovalue}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
                </div>
            </div>        
            {/* <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Large text" />                
                </Form.Group>
            <Button variant="primary">Primary</Button>{' '} */}
        </div>
    );
}

export default Todo;