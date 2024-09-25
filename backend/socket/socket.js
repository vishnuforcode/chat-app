import { Server } from "socket.io";

import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://cseb-yaps.onrender.com"],
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
  path: "/socket.io/",
});

export const getreceiversocketid = (reciverid) =>{
  return userSocketMap[reciverid];
}

const userSocketMap = {};

// app.listen(8000 ,()=>{
//     console.log("listenig on 8000");

// })

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  const userid = socket.handshake.query.userid;
  if (userid !== undefined) {
    userSocketMap[userid] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    delete userSocketMap[userid];
    console.log('user disconnected', socket.id)
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
  });
});

export { app, io, server };
