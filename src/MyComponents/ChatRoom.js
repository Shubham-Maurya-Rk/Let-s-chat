// import React,{useEffect} from 'react';
import "../Styles/ChatRoom.css";
import send from "../imgs/send.png"
// import {user} from "./LoginPage";
// import socketIo from "socket.io-client";
// const ENDPOINT="http://localhost:3001/";


export default function ChatRoom() {
    // useEffect(() => {
    //     const io=socketIo(ENDPOINT,{transports:["websocket"]});
    //     io.on('connect',()=>{
    //         io.emit("joined",user);
    //     })

    //     io.on('welcome',()=>{
    //         const chats=document.querySelector('.chats');
    //         console.log("You joined the chat");
    //         // chats.innerHTML+=`<div class='join-left'>You joined the chat</div>`;
    //     })
    //     io.on("new-user-joined",userData=>{
    //         const chats=document.querySelector('.chats');
    //         console.log(`${userData[0]} joined the chat`);
    //         // chats.innerHTML+=`<div class='join-left'>${userData[0]} joined chat</div>`;
    //     })
    //     io.on('user-left',(userData)=>{
    //         console.log(`${userData[0]} left the chat`);
    //     })
    //   return () => {
    //       // io.off();
    //     // io.emit('disconnect')
    //   }
    // }, [])
    
  return (<>
    <div className='chatroom'>
        <div className="chats">
            {/* <div className='join-left'>Shubham joined chat</div> */}

            {/* <div className="msg receive"><b>Shubham: </b><br />Hiii Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, voluptatum. Obcaecati, exercitationem placeat iste dolor dolores tenetur rem modi eaque molestiae doloremque perferendis numquam quae veniam, recusandae cum hic. Omnis.</div>

            <div className="msg sent"><b>Shubham: </b><br />Hiii Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, voluptatum. Obcaecati, exercitationem placeat iste dolor dolores tenetur rem modi eaque molestiae doloremque perferendis numquam quae veniam, recusandae cum hic. Omnis.</div> */}
        </div>

        <div className="inputs">
            <form className="flexCenter">
                <input type="text" name="message" placeholder='Type here..' />
                <button type="submit"><img src={send} alt="send btn" /></button>
            </form>
        </div>

    </div>
</>
    
  )
}

