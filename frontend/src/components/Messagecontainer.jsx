import React, { useEffect } from 'react'
import Sendmessage from './Sendmessage'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/Store'
import { setSelectedUser } from '../redux/UserSlice'
import { MdOutlineChat } from "react-icons/md";


const Messagecontainer =() => {

  const { selecteduser, authUser } = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, [])
  return (
    <>
      {
        selecteduser !== null ? (<div className='md:min-w-[550px] flex flex-col'>

          <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>

            <div className='avatar online '>
              <div className='w-12 rounded-full'>
                <img src={selecteduser?.profilephoto} alt="" />
              </div>
            </div>
            <div className='flex flex-col flex-1 '>
              <div className='flex justify-between gap-2 '>
                <p>{selecteduser?.fullname}</p>
              </div>
            </div>


          </div>
          <Messages />
          <Sendmessage />

        </div>) : (

          <div className='md:min-w-[550px] flex flex-row justify-center items-center'>
            <h1 className='font-bold font-sans' >
              <h3>Hi, {authUser?.fullname}</h3>
              Have some chats with CSE-B <MdOutlineChat size={70} />
            </h1>
          </div>

        )







      }

    </>

  )
}

export default Messagecontainer
