import React from 'react'

const Footer = () => {
    return (
        <footer className="ui inverted vertical footer segment">
            <div className="ui center aligned container">
                <p>Ⓒ Copyright {(new Date().getFullYear())}</p>
            </div>
        </footer>
    )
};

export default Footer