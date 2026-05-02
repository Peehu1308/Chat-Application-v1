import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userslice';

const OtherUser = ({user}) => {
    const dispatch=useDispatch();
    const {selectedUser}=useSelector(store=>store.user);
    const selectedUserHandler=(user)=>{
        console.log(user);
        dispatch(setSelectedUser(user));

    }
  return (
    <>
        
            <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser?._id===user?._id?'bg-zinc-200':''} flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer`}>
                <div className='avatar avatar-online'>
                    <div>
                        <img src={user?.profilePhoto} alt="user profile"  className='h-10 w-10 border border-white rounded-full bg-white'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between gap-2 flex-1'>
                        <p>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0'>

            </div>
        
    </>
  )
}

export default OtherUser