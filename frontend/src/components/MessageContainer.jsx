import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSelectedUser } from '../redux/userslice'

const MessageContainer = () => {
    const {selectedUser,authUser}=useSelector(store=>store.user);

    const dispatch=useDispatch();
    useEffect(()=>{
        return ()=>dispatch(setSelectedUser(null));
    },[])
  return (
    <>
    {selectedUser!==null?(
        <div className='md:min-w-[450px] flex flex-col min-h-[400px] overflow-scroll'>
            
            <div className='flex gap-2 items-center bg-white rounded-sm p-2 cursor-pointer px-4 py-2 mmb-2'>
                <div className='avatar avatar-online'>
                    <div>
                        <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="user profile"  className='h-10 w-10 border border-white rounded-full bg-white'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between gap-2 flex-1'>
                        <p>{selectedUser?.fullName}</p>
                    </div>
                </div>
            </div>
            
            <Messages />
            
            <SendInput/>
        
    </div>
    ):(
        <div className='md:min-w-[550px] flex flex-col justify-center p-4'>
            <h1 className='text-3xl'>Hi,{authUser?.fullName},</h1>
            <h1>Lets start a conversation!</h1>
        </div>
    )
}
    </>
  )
}

export default MessageContainer