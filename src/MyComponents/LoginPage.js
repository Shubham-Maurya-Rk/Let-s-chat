import React from 'react';
import logo from "../imgs/logo.png";
import "../Styles/LoginPage.css";

export default function LoginPage() {
    return (<div class="body">
        <div class="loginContainer">
            <div class="head flexCenter">
                <div class="flexCenter">
                    <img src={logo} alt="logo" />
                    <p>Let's Chat</p>
                </div>
            </div>

            <div className='form flexCenter'>
                <form method='' class="flexCenter">
                    <input type="tel" name="phone" placeholder='Enter phone number.. '/>
                    <input type="text" name="Username" placeholder='Enter username..'/>
                    <button type="submit">Start</button>
                </form>
            </div>
        </div>
    </div>)
}
