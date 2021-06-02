import {Route } from 'react-router-dom';
import { Switch} from "react-router";
import logo from './logo.svg';
import './App.css';
import Header from './Components/share/Header';
import Counter from './Components/UI/Counter';
import Home from './Components/UI/Home';

function App() {
  return (
    <div className="App">     
      
      <main>
      <Switch>
        <Route path='/counter'>
          <Counter/>
        </Route> 
        <Route path='/home'>
          <Home/>
        </Route>  
        <Route >
          <Header/>
        </Route>
        </Switch>        
      </main>
    </div>
  );
}

export default App;
