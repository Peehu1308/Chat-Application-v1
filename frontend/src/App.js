import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

// Configure axios globally
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  const {authUser}=useSelector(store=>store.user);
  const [socket,setsocket]=useState(null);
  useEffect(()=>{
    if(authUser){
      const socket=io("http://localhost:5000",{
        transports:['websocket'],
        withCredentials:true,
      });
      
      socket.on('connect',()=>{
        console.log("Socket connected:",socket.id);
      });
      
      socket.on('connect_error',(error)=>{
        console.log("Socket connection error:",error);
      });
      
      setsocket(socket);
      
      return ()=>{
        socket.disconnect();
      };
    }
  },[authUser ])
  return (
    <div className="p-4 h-screen w-screen items-center bg-red-400">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
