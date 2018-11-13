import React, { Component } from 'react';
import "./style.css";

class Header extends Component {
    render() {
        return (
            <nav className="black">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Supply Chain</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="/user/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
