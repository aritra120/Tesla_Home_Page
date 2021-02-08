import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg';

const Header = () =>{
    return(
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo"/>
            </div>

            <div className="header__center">
                <p>Modeel S</p>
                <p>Modeel X</p>
                <p>Modeel Y</p>
                <p>Modeel 3</p>
                <p>Solar Roof</p>
                <p>Solar Pannel</p>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    );
}

export default Header;