import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuthUser } from "../redux/userslice";

function Login() {

    const [user,setuser]=useState({
        
        username:"",
        password:"",
        
      });
      const dispatch=useDispatch();
      const navigate=useNavigate();
      
    
      const onSubmitHandler=async(e)=>{
        e.preventDefault();
        try
    {
      console.log(user);
      const res=await axios.post(`http://localhost:5000/api/v1/user/login`,user,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true,
      });
      // console.log(res.data);
      // if(res.data.success){
        navigate("/")
        // toast.success(res.data.message);
      
      console.log(res.data);
      dispatch(setAuthUser(res.data));

    }
    catch(err){
      console.log(err);
      const errorMessage = err.response?.data?.message || err.message || "Login failed";
      toast.error(errorMessage);
    }
        // setuser({
          
        // username:"",
        // password:"",
        
        // })
      }
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 border backdrop-blur-sm">
        <p className="text-3xl font-bold text-center text-gray-300">Login</p>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
                value={user.username}
                onChange={(e)=>setuser({...user,username:e.target.value})}
              className="w-full input input-bordered h-10 p-2"
              type="text"
              placeholder="UserName"
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input

            value={user.password}
            onChange={(e)=>setuser({...user,password:e.target.value})}
              className="w-full input input-bordered h-10 p-2"
              type="password"
              placeholder="Password"
            />
          </div>
          
         
          <div>
            <button type="submit" onSubmit={onSubmitHandler} className="btn btn-block bg-black text-white p-4 rounded-lg mt-2 border border-slate-300">
              Login
            </button>
            <Link className="flex justify-center my-2" to="/signup">Don't have an Account?  Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
