import React from 'react'
import { CiSearch } from "react-icons/ci";
import OtherUsers from './OtherUsers';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-3 flex flex-col'>
        <form action="">
            <div className='flex flex-row'>
                <input type="text" className='input input-bordered rounded-l-md rounded-r-none' placeholder='Search...'/>
            <button type='submit' className='btn p-4 bg-zinc-500 rounded-l-none shadow-none text-white'>
                <CiSearch size={20} className='w-6 h-6 outline-4'/>
            </button>
            </div>
            <div className='divider px-3'>OR</div>
            <OtherUsers/>
            <div className='mt-2'>
                <button className='btn btn-sm bg-white p-3'>Logout</button>
            </div>
        </form>
    </div>
  )
}

export default Sidebar