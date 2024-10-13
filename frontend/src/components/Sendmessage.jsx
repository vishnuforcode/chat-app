import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/Store';
import { setMessages } from '../redux/Messageslice';


const Sendmessage = () => {

  const [message, setMessage] = useState([ ]);

  const { messages } = useSelector(store => store.message)

  const dispatch = useDispatch();
  const { selecteduser } = useSelector(store => store.user)


  const onsubmithandler = async (e) => {


    e.preventDefault();
    // alert(message);

    try {
      const res = await axios.post(`https://cseb-yaps-ftyb.onrender.com/api/v1/message/send/${selecteduser?._id}`, { message }, {
        headers: {
          "Content-Type": 'application/json'
        },
        withCredentials: true
      }
      )

      console.log(res);
      // console.log(newmessage)
      dispatch(setMessages([...messages , res?.data?.newmessage]))


    } catch (error) {
      console.log(error);

    }
    setMessage([ ]);
  }
  return (
    <form
      onSubmit={onsubmithandler}
      className='px-4 my-3 '>
      <div className='w-full relative'>
        <input
          value={message}
          type="text"

          onChange={(e) => setMessage(e.target.value)}
          placeholder='send message'
          className='border text-sm rounded-lg block w-full p-3 border-zinc-300 bg-gray-600 text-white' />
        <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4'>
          <IoSend />
        </button>
      </div>
    </form>
  )
}

export default Sendmessage
