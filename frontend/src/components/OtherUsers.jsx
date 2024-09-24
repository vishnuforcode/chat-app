import React from 'react'
import Otheruser from './Otheruser'
import UseGetotherUsers from '../hooks/UseGetotherUsers';
import { useSelector } from 'react-redux';


const  OtherUsers = () => {
  //custom hooks
  UseGetotherUsers() ;
  const {otherUsers} = useSelector(store => store.user);
  if(!otherUsers) return ; // early return in react

  return (
    <div className="overflow-auto flex-1">
      {
        otherUsers?.map((user)=>{
          // console.log(user);
          return (
            // console.log(user) 
            <Otheruser key={user._id} User={user}/>
          )
        })
      }
    </div>
  )
}

export default OtherUsers
