import {Route } from 'react-router-dom';
import {Switch} from "react-router";
import logo from './logo.svg';
import './App.css';
import Header from './Components/share/Header';
import Counter from './Components/UI/Counter';
import Home from './Components/UI/Home';
import Footer from './Components/share/Footer';
import Todo from './Components/UI/Todo';
import Parenta from './Components/UI/Parenta';
import Parent from './Components/UI/ChildToParent/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>     
       <Header/>       
      <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path='/home' exact>
          <Home/>
        </Route> 
        <Route path='/counter' exact>
          <Counter/>
        </Route>
        <Route path="/todolist" exact>
          <Todo/>
        </Route>   
        <Route path="/PtoC" exact >
          <Parenta></Parenta>  
        </Route>   
        <Route path='/ChildToParent' exact>
          <Parent></Parent>
          </Route>           
      </Switch>        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
