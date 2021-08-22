import React from 'react';

import { NavLink } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';

import classes from './NavBar.css'


const NavBar = () => {
    return (
        <Aux>
            <div className={classes.list}>
                <li className={classes.brand}>
                    <h3>My Blog</h3>
                </li>
                <li className={classes.mylist}>
                    <NavLink className={classes.a} to="/">Home</NavLink>
                </li>
                <li className={classes.mylist}>
                    <NavLink className={classes.a} to="/create">Create Blog</NavLink>
                </li>
            </div>

        </Aux>
        );
};

export default NavBar;