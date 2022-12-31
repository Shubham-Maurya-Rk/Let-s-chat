import React from 'react';
import "../Styles/Navbar.css";
import logo from "../imgs/logo.png";
import user from "../imgs/user_icon.png";

function showHidePeople(){
    let userCont=document.querySelector('.usersCont');
    console.log(userCont.style.display);
    if(userCont.style.display==="none")userCont.style.display="block";
    else userCont.style.display="none";
        
}
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="logo">
                <div className="flexCenter">
                    <img src={logo} alt="logo" />
                    <p>Let's Chat</p>
                </div>
            </div>
            <div className="user flexCenter">
                <div className="peoplesNavbar" onClick={showHidePeople}>12</div>
                <img src={user} alt="user"/>
            </div>
        </nav>
    )
}
