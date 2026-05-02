import axios from "axios";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
    const {selectedUser}=useSelector(store=>store.user);
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchMessages=async()=>{
            if(!selectedUser?._id) return;
            try{
                axios.defaults.withCredentials=true;
                const res=await axios.get(`http://localhost:8000/api/v1/message/${selectedUser._id}`);
                console.log("Messages fetched:", res.data);
                dispatch(setMessages(res.data));
            }
            catch(err){
                console.log("Error fetching messages:", err);
            }
        }
        fetchMessages();
    },[selectedUser?._id, dispatch])
}

export default useGetMessages