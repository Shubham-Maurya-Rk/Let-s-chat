const express=require('express')
const http=require('http')
const cors=require('cors')
const app=express()
const server=http.createServer(app);
const io=require('socket.io')(server);
const port= 3001 || process.env.PORT;


let users={};
app.use(cors());
app.get("/",(rq,rs)=>{
    rs.send("<h1>Hello ji</h1>");
});

io.on('connection',(socket)=>{
    socket.on('joined',(user)=>{
        users[socket.id]=user;
        console.log(users);
        console.log("-------------");
        socket.emit('welcome');
        socket.broadcast.emit("new-user-joined",users[socket.id]);
    });

    socket.on('disconnect',()=>{
        socket.broadcast.emit('user-left',users[socket.id])
    })
});

server.listen(port,()=>{
    console.log("Server stated at port :"+port);
});

