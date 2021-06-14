import { NavLink } from 'react-router-dom';
import stylescss from './Header.module.css';
const Header =()=>{
    return(
        <header className={stylescss.header}>
        <nav>
        <ul className={stylescss.sidenav}>
            <li>
                <NavLink activeClassName={stylescss.active} to='/home'>
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink activeClassName={stylescss.active} to='/counter'>
                  Counter
            </NavLink>
                
            </li> 
            <li>
                <NavLink activeClassName={stylescss.active} to='/todolist'>
                    Todo
                </NavLink>
            </li>  
            <li>
                <NavLink activeClassName={stylescss.active} to='/PtoC'>
                    Parent to Child
                </NavLink>
            </li>  
            <li>
                <NavLink activeClassName={stylescss.active} to='/ChildToParent'>
                    Child To Parent
                </NavLink>
                
            </li> 
        </ul>
        </nav>
        </header>

    );
}

export default Header;