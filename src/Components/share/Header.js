
import { NavLink } from 'react-router-dom';
import stylescss from './Footer.module.css';
const Header =()=>{
    return(
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
        </ul>
        </nav>

    );
}

export default Header;