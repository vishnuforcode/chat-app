import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../redux/UserSlice'

const Login = ()=> {
  const [user, setuser] = useState({

    username: "",
    password: ""

  })
const dispatch = useDispatch()
  const navigate = useNavigate()
  const onsubmithandeler = async  (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://yaps-u6up.onrender.com/api/v1/user/login', user, {
          headers: {
              "Content-Type": 'application/json'
          },
          withCredentials: true,
      })
      
          navigate("/")
        
          // console.log(res)
      dispatch(setAuthUser(res.data))
      
      
  } catch (error) {
    toast.error(error)
      console.log(error)
  }
    setuser({

      username: "",
      password: ""

    })
  }
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center '>Login</h1>
        <form onSubmit={onsubmithandeler} action="">

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>User Name</span>
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
              className='w-full input input-bordered h-10'
              placeholder='User name' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              className='w-full input input-bordered h-10'
              placeholder='password' />
          </div>





          <p className='mr-3'>Don't have an account?<Link to='/register'>SignUp</Link></p>

          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>
              Login
            </button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Login
