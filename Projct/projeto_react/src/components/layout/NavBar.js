import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Container from './Container';
import Styles from './NavBar.module.css';
import logo from '../../img/logo.png';


function NavBar(){
    return(
        <nav className={Styles.NavBar}>   
            <Container>
                <ul>
                    <li className={Styles.logo}><Link to="/"><img src={logo} alt="Logo" /></Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Company">Company</Link></li>
                    <li><Link to="/Contatos">Contatos</Link></li>
                    <li><Link to="/NewProjct">NewProjct</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar