import React from 'react'
import Message from './Message'
// import UsegetMessages from '../hooks/UsegetMessages';
import { useSelector } from 'react-redux';
import store from '../redux/Store';
import UsegetRealTimeMessage from '../hooks/UsegetRealTimeMessage';
import UsegetMessages from '../hooks/UsegetMessages';

const Messages = () => {
  UsegetMessages();
  UsegetRealTimeMessage() ;
  
  const { messages } = useSelector(store => store.message);
  // console.log(messages);
  if (!messages) return;
  // console.log();



  return (

    <div className='px-4 flex-1 overflow-auto'>
      {
       Array.isArray(messages) && messages?.map((message) => {
          // console.log(message._id) 
          // console.log(message?.message)
          return (
           
            <Message key={message?._id} message={message} />
           
          )
         
        })
      }
    </div>
  )
}

export default Messages
