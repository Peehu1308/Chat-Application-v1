import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

const Messages = () => {
  const scroll=useRef();
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"});
  })
  useGetMessages();
  const {messages}=useSelector(store=>store.message);

  if(!messages)return;

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {
          messages?.map((message)=>{
            return (
              <Message key={message._id} message={message}/>
            )
          })
        }
        <div ref={scroll}></div>
        
        
    </div>
  )
}

export default Messages