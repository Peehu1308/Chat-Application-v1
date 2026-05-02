import  { useEffect } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setOtherUsers } from '../redux/userslice';

const useGetOtherUsers = () => {
    const dispatch=useDispatch();


    useEffect(()=>{
        const fetchOtherUsers=async()=>{
            try{
                 const res=await axios.get(`http://localhost:8000/api/v1/user/`, {
                    withCredentials: true
                });
                console.log(res);
                // Store
                dispatch(setOtherUsers(res.data));


            }
            catch(err){
                console.log(err);
            }
        }
        fetchOtherUsers();

    },[])
}

export default useGetOtherUsers