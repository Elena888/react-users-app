import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Users
            </Link>
            <Link to="/about-author" className="item">
                About Author
            </Link>
        </div>
    )
};

export default Header