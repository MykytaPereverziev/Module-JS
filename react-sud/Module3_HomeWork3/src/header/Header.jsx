import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="header">
            <NavLink
            className='btn'
            to='/Login'
            >LOGIN
            </NavLink>

            <NavLink
            className='btn'
            to='/Users'
            >USERS
            </NavLink>

            <NavLink
            className='btn'
            to='/Books'
            >BOOKS
            </NavLink>

            <NavLink
            className='btn'
            to='/Pizzas'
            >PIZZAS
            </NavLink>
        </header>
    );
}


export default Header