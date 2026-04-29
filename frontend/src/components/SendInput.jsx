import React from 'react'
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    
      <form className='px-4 my-3'>
        <div className='w-full relative'>
          <input type="text" 
          placeholder='Send a message...'
          className='border border-zinc-500 text-sm rounded-lg block w-full bg-gray-600 text-white p-4 mt-6'
          />
          <button className='absolute flex inset-y-0 end-1 items-center justify-center pr-4'>
            <IoSend />
          </button>
        </div>
      </form>
    
  )
}

export default SendInput