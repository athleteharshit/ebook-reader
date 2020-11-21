import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../img/logo1.png';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header_link">
                <img className="header_logo" src={logo} alt=""/>
            </Link>
            <div className="header_text">
                <h1 className="header_heading">E-book Reader</h1>
                <p className="header_subheading">Created by Harshit</p>
            </div>
        </header>
    )
}

export default Header;