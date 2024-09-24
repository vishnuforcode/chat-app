import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import store from '../redux/Store';

const Message = ({message}) => {
  const scroll = useRef();
  const {authUser ,selecteduser} = useSelector(store=> store.user)
  // const message = props.message ;
  // console.log(message?.message)
  useEffect(()=>{
    scroll.current?.scrollIntoView({behaviour : "smooth"})
  },[message])

  return (
    <>
    <div  ref={scroll} className={`flex-1 chat ${authUser?._id === message?.senderid ? "chat-end" : "chat-start "}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={message?.senderid == authUser?._id ? authUser?.profilephoto : selecteduser?.profilephoto} />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50 ">12:45</time>
      </div>
      <div className= {`chat-bubble ${authUser?._id !== message?.senderid ? " bg-gray-200 text-black" : "  "}`} >{message?.message} </div>

    </div>
    </>
  )
}

export default Message
