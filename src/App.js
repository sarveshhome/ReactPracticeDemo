import {Route } from 'react-router-dom';
import {Switch} from "react-router";
import logo from './logo.svg';
import './App.css';
import Header from './Components/share/Header';
import Counter from './Components/UI/Counter';
import Home from './Components/UI/Home';
import Footer from './Components/share/Footer';
import Todo from './Components/UI/Todo';

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
      </Switch>        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
