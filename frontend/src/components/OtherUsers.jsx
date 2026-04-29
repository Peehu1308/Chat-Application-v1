import React from 'react'

const OtherUsers = () => {
  return (
    <div>
        
            <div className='flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer'>
                <div className='avatar avatar-online'>
                    <div>
                        <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="user profile"  className='h-10 w-10 border border-white rounded-full bg-white'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between gap-2 flex-1'>
                        <p>Peehu</p>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default OtherUsers