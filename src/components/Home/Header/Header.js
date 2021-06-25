import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="Header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;