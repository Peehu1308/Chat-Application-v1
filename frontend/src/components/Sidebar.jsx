import axios from "axios";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import OtherUsers from "./OtherUsers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers } from "../redux/userslice";

const Sidebar = () => {
    const [search,setsearch]=useState("");
    const navigate = useNavigate();
    const {otherUsers}=useSelector(store=>store.user);
    
    const logoutHandler = async () => {
        try {
        const res = await axios.get(`http://localhost:8000/api/v1/user/logout`, {
            withCredentials: true,
        });
        console.log("Logout success");
        toast.success(res.data.message);
        setTimeout(() => {
            navigate("/login");
        }, 500);
        } catch (err) {
        console.log("Logout error:", err.response?.status, err.response?.data);
        // Even if logout fails, still clear user and navigate
        toast.error(err.response?.data?.message || "Logout failed");
        setTimeout(() => {
            navigate("/login");
        }, 1000);
        }
    };
    const dispatch=useDispatch();

    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        const conversationUser=otherUsers?.find((user)=>user.fullName.tolowerCase().includes(search.tolowerCase()));
        if(conversationUser){
            dispatch(setOtherUsers(conversationUser));
        }
        else{
            toast.error("No user found with that name");
        }

    }
    return (
        <div className="border-r border-slate-500 p-3 flex flex-col">
        <div >
            <div className="flex flex-row">
            <input

            value={search}
            onChange={(e)=>setsearch(e.target.value)}
                type="text"
                className="input input-bordered rounded-l-md rounded-r-none"
                placeholder="Search..."
            />
            <button
                onSubmit={searchSubmitHandler}
                type="submit"
                className="btn p-4 bg-zinc-500 rounded-l-none shadow-none text-white"
            >
                <CiSearch size={20} className="w-6 h-6 outline-4" />
            </button>
            </div>
            <div className="divider px-3">OR</div>
            <OtherUsers />
            <div className="mt-2">
            <button onClick={logoutHandler} className="btn btn-sm bg-white p-3">
                Logout
            </button>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;
