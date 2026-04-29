import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'

const OtherUsers = () => {
    useGetOtherUsers();
  return (
    <div className='overflow-y-scroll h-[400px] '>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
        <OtherUser/>
    </div>
  )
}

export default OtherUsers