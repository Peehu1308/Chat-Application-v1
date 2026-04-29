import  { useEffect } from 'react'
import axios from 'axios'

const useGetOtherUsers = () => {
    useEffect(()=>{
        const fetchOtherUsers=async()=>{
            try{
                axios.defaults.withCredentials=true;
                const res=await axios.get(`http://localhost:8000/api/v1/user/`);
                console.log(res);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchOtherUsers();

    },[])
}

export default useGetOtherUsers