import React, { useState } from 'react'
import OtherUsers from './OtherUsers'
import { HiSearch } from "react-icons/hi";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/Store';
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/UserSlice';
import { setMessages } from '../redux/Messageslice';




const Sidebar = () => {
    const { otherUsers } = useSelector(store => store.user)

    const [search, setsearch] = useState("")
    const dispatch = useDispatch()


    const navigate = useNavigate();

    const logouthandeler = async () => {
        try {
            const res = await axios.get('https://yaps-u6up.onrender.com/api/v1/user/logout')
            navigate("/login")
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));

            
            
        }
        catch (error) {
            console.log(error)
        }
    }
    const searchhandeler = (e) => {
        e.preventDefault();

        // alert(search);
        const convosearch = otherUsers?.find((user) => user.fullname.toLowerCase().includes(search.toLowerCase()))
        if (convosearch) {
            dispatch(setOtherUsers([convosearch]))
        } else { toast.error("user not found") }
    }
    return (
        <div className='border-r border-slate-500 p-4 flex-col flex'>
            <form
                onSubmit={searchhandeler} action="" className='flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => { setsearch(e.target.value) }}
                    className='input input-bordered rounded-md' placeholder='search...' type="text" />
                <button type='submit' className='btn  bg-zinc-400'>
                    <HiSearch className='w-6 h-6 outline-none ' s />
                </button>
            </form>
            <div className="divider px-3"></div>
            <OtherUsers />
            <div className='mt-2'>
                <button onClick={logouthandeler} className='btn btn-sm '>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
