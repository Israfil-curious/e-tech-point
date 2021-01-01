import React from 'react';
import img from './education-logo.jpg';
import './Header.css';

const Header = ()=>{
    return(
        <div className="header">
            <div className="main-logo">
                <img src={img} alt=""/>
            </div>
            <div className="nav-bar">
                <img src={img} alt=""/>
                <nav>
                    <a href="/Home">Home</a>
                    <a href="/Products">Products</a>
                    <a href="/Books">Books</a>
                    <a href="/About us">About us</a>
                </nav>
            </div>
            
        </div>
    );
};

export default Header