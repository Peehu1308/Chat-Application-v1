import React from 'react'
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
import { useRef } from 'react';

const SendInput = () => {
  
  const {selectedUser}=useSelector(store=>store.user);
  const [message,setmessage]=useState("");
  const dispatch=useDispatch();
  const {messages}=useSelector(store=>store.message);

  const onSubmitHandler=async(e)=>{
    e.preventDefault();

    try{
      const res=await axios.post(`http://localhost:8000/api/v1/message/send/${selectedUser?._id}`,{message},{
        headers:{
          "Content-Type":'application/json'
        },
        withCredentials:true,
      });
      console.log("Message sent:", res.data);
      
      // Fetch updated messages after sending
      const messagesRes=await axios.get(`http://localhost:8000/api/v1/message/${selectedUser._id}`,{
        withCredentials:true,
      });
      dispatch(setMessages(messagesRes.data));
      
    }
    catch(err){
      console.log(err);
    }
    setmessage("");
  }
  return (
    
      <form className='px-4 my-3' onSubmit={onSubmitHandler}>
        <div className='w-full relative'>
          <input type="text" 

          value={message}
          onChange={(e)=>setmessage(e.target.value)}
          placeholder='Send a message...'
          className='border border-zinc-500 text-sm rounded-lg block w-full bg-gray-600 text-white p-4 mt-6'
          />
          <button type='submit' className='absolute flex inset-y-0 end-1 items-center justify-center pr-4'>
            <IoSend />
          </button>
        </div>
      </form>
    
  )
}

export default SendInput