import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import {
    Link
} from 'react-router-dom';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Camaleflix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/video/register">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;