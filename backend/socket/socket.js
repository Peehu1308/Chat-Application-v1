import express from "express";
import http from "http";
import { Server } from "socket.io";


const app=express();
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST'],

    },
});
export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId];
}

const userSocketMap={}; //userid->socketid


io.on('connection',(socket)=>{
    console.log("user connected to socket io",socket.id);

    const userId=socket.handshake.query.userId;
    if(userId!==undefined){
        userSocketMap[userId]=socket.id;
    }
    io.emit('getOnlineUser',Object.keys(userSocketMap));

    socket.on('disconnect',()=>{
        console.log('userdisconnected',socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUser',Object.keys(userSocketMap));
    })

})

export { app, io, server };
