import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [user,setuser]=useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
  });
  const handleCheckbox=(gender)=>{
    setuser({...user,gender})
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log(user);
    setuser({
      fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
    })
  }

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 border backdrop-blur-sm">
        <p className="text-3xl font-bold text-center text-gray-300">sign up</p>
        <form action="" onSubmit={onSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
            onChange={(e)=>setuser({...user,username:e.target.value})}
            value={user.username}
              className="w-full input input-bordered h-10 p-2"
              type="text"
              placeholder="UserName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
            onChange={(e)=>setuser({...user,fullname:e.target.value})}
            value={user.fullname}
              className="w-full input input-bordered h-10 p-2"
              type="text"
              placeholder="Peehu"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
            onChange={(e)=>setuser({...user,password:e.target.value})}
            value={user.password}
              className="w-full input input-bordered h-10 p-2"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
            onChange={(e)=>setuser({...user,confirmPassword:e.target.value})}
            value={user.confirmPassword}
              className="w-full input input-bordered h-10 p-2"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className=" flex flex-row">
            <div className="flex items-center">
              <p>Male</p>
              <input
              checked={user.gender==="male"}
              onChange={()=>handleCheckbox("male")}
              type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
              checked={user.gender==="female"}
              onChange={()=>handleCheckbox("female")}
               type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
          </div>
          
          <div>
            <button type="submit" className="btn btn-block bg-black text-white p-4 rounded-lg mt-2 border border-slate-300">
              Sign Up
            </button>
            <Link className="flex justify-center" to="/login">Already have an Account?  Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
