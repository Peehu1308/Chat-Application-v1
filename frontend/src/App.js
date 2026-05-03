import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import {setOnlineUsers} from "../src/redux/userslice"
import { setSocket } from "../src/redux/socketslice";

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
  const {socket}=useSelector(store=>store.socket);
  
  const dispatch=useDispatch();
  
  useEffect(() => {
  if (authUser) {
    const newSocket = io("http://localhost:8000", {
      query: { userId: authUser._id },
      transports: ['websocket'],
      withCredentials: true,
    });

    newSocket.on('connect', () => console.log("Socket connected:", newSocket.id));
    newSocket.on('getOnlineUser', (onlineUsers) => dispatch(setOnlineUsers(onlineUsers)));

    dispatch(setSocket(newSocket));

    return () => {
      newSocket.close();
      dispatch(setSocket(null));
    };
  }
}, [authUser]);
  return (
    <div className="p-4 h-screen w-screen items-center bg-red-400">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
