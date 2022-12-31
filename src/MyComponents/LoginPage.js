import {React,useState} from 'react';
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import "../Styles/LoginPage.css";

let user;
export default function LoginPage() {
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    
    function handleUser(e){
        if(name==="" || phone==="")e.preventDefault();
        else user=[name,phone];
    }
    return (<div className="body">
        <div className="loginContainer">
            <div className="head flexCenter">
                <div className="flexCenter">
                    <img src={logo} alt="logo" />
                    <p>Let's Chat</p>
                </div>
            </div>

            <div className='form flexCenter'>
                    <input onChange={(e)=>{setphone(e.target.value)}} type="tel" name="phone" placeholder='Enter phone number.. ' id="phone"/>
                    <input type="text" onChange={(e)=>{setname(e.target.value)}} name="Username" placeholder='Enter username..' id="username"/>
                    <Link onClick={handleUser} to="/chat"><button id='startBtn'>Start</button></Link>
            </div>
        </div>
    </div>)
}
export {user};
