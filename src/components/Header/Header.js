import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar className="nav-custom"  expand="lg">
            <div className="container">
            <NavLink className ="navbar-brand" to="/">Ultra-nation</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <NavLink className ="nav-link" to="/">Home</NavLink>
                <NavLink className ="nav-link" to="/country">Country</NavLink>
                </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    );
};

export default Header;