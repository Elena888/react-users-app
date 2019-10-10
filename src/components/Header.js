import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className="ui inverted menu">
            <div className="ui container">
                <Link to="/" className="item">
                    <img src={logo} className="logo" alt="logo"/>
                </Link>
                <div className="right item">
                    <Link to="/" className="item">
                        Users
                    </Link>
                    <Link to="/about-author" className="item">
                        About Author
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header