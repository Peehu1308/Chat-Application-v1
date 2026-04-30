import React from 'react'

const OtherUser = (props) => {
    const user=props.user;
  return (
    <div>
        
            <div className='flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer'>
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
        
    </div>
  )
}

export default OtherUser