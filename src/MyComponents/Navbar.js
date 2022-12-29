import React from 'react';
import "../Styles/Navbar.css";
import logo from "../imgs/logo.png";
import user from "../imgs/user_icon.png";


export default function Navbar() {
    return (
        <nav className='navbar'>
            <div class="logo">
                <div class="flexCenter">
                    <img src={logo} alt="logo" />
                    <p>Let's Chat</p>
                </div>
            </div>
            <div class="user">
                <img src={user} alt="user"/>
            </div>
        </nav>
    )
}
