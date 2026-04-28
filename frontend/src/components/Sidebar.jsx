import React from 'react'
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div >
        <form action="">
            <div className='flex flex-row'>
                <input type="text" className='input input-bordered rounded-l-md rounded-r-none' placeholder='Search...'/>
            <button type='submit' className='btn p-4 bg-zinc-500 rounded-l-none shadow-none'>
                <CiSearch size={20}/>
            </button>
            </div>
        </form>
    </div>
  )
}

export default Sidebar