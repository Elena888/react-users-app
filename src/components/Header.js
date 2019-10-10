import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../img/logo.png'

const Header = () => {

    return (
        <header className="ui inverted vertical segment">
            <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                <NavLink exact to="/" className="item">
                    <img src={logo} className="logo" alt="logo"/>
                </NavLink>
                <div className="right item">
                    <NavLink exact to="/" className="item">
                        Users
                    </NavLink>
                    <NavLink to="/about-author" className="item">
                        About Author
                    </NavLink>
                </div>
                </div>
            </div>
        </header>
    )
};

export default Header