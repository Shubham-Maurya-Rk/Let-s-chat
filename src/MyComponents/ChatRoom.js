import React from 'react'
import "../Styles/ChatRoom.css"
import send from "../imgs/send.png"

export default function () {
    return (
        <div className='chatroom'>
            <div class="inputs">
                <form class="flexCenter">
                    <input type="text" name="message" placeholder='Type here..' />
                    <button type="submit"><img src={send} alt="send btn" /></button>
                </form>
            </div>
        </div>
    )
}
