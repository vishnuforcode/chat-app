import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
    const [user, setuser] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmpassword: "",
        gender: "",
    })
    const navigate = useNavigate()


    const handelcheckbox = (gender) => {
        setuser({ ...user, gender })
    }
    const onsubmithandeler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('https://cseb-yaps-ftyb.onrender.com/api/v1/user/register', user, {
                headers: {
                    "Content-Type": 'application/json'
                },
                withCredentials: true,
            })
            if(res.data.success){
                navigate("/login")
                // toast.success(res.data.message)
            }
        } catch (error) {
             toast.error(error.response.data.message)
            console.log(error)
        }

        setuser({
            fullname: "",
            username: "",
            password: "",
            confirmpassword: "",
            gender: "",

        })
    }

 
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-white-100'>
                <h1 className='text-3xl font-bold text-center '>Sign up</h1>
                <form onSubmit={onsubmithandeler} action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text"
                            value={user.fullname}
                            onChange={(e) => setuser({ ...user, fullname: e.target.value })}
                            className='w-full input input-bordered h-10'
                            placeholder='name here' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User Name</span>
                        </label>
                        <input value={user.username} onChange={(e) => setuser({ ...user, username: e.target.value })} type="text" className='w-full input input-bordered h-10' placeholder='User name' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} type="password" className='w-full input input-bordered h-10' placeholder='password' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input value={user.confirmpassword} onChange={(e) => setuser({ ...user, confirmpassword: e.target.value })} type="password" className='w-full input input-bordered h-10' placeholder='confirm password' />
                    </div>
                    <div className=' flex items-center my-4'>

                        <div className=' flex items-center '>
                            <p>Male</p>
                            <input type="checkbox"
                                checked={user.gender === "Male"}
                                onChange={() => handelcheckbox("Male")}

                                className="checkbox mx-2" />
                        </div>

                        <div className='flex items-center '>
                            <p>Female</p>
                            <input type="checkbox"
                                checked={user.gender === "female"}
                                onChange={() => handelcheckbox("female")}

                                className="checkbox mx-2" />
                        </div>
                      
                    </div>

                    <p className='mr-3'>AlreadyHave an account?
                        <Link to='/login'>
                            Login

                        </Link>
                    </p>

                    <div>
                        <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>
                            Sign Up
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Register
