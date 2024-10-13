import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/UserSlice';
import store from '../redux/Store';


const Otheruser = ({ User }) => {
    // const user = props.User ;
    // console.log(user) ;
    const dispatch = useDispatch();

    const {selecteduser ,onlineusers} = useSelector(store=> store.user);
    const isOnline =  onlineusers?.includes(User._id)

    const selectedUserhandler = (User) => {
        // console.log(User);
        dispatch(setSelectedUser(User));
       
    }
    // console.log(selecteduser?._id) ;
    // console.log(user?._id);
    
    
    return (
        <>
            <div onClick={() => selectedUserhandler(User)} className= { ` ${selecteduser?._id === User?._id ?  'bg-zinc-200' : " "}  flex gap-2 items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}>

                <div className={`avatar ${ isOnline? 'online' : ''}`} >
                    <div className='w-12 rounded-full'>
                        <img src={User?.profilephoto} alt="profile" />
                    </div>
                </div>
                <div className='flex flex-col flex-1 '>
                    <div className='flex justify-between gap-2 '>
                        <p>{User?.fullname}</p>
                    </div>
                </div>


            </div>
            <div className="divider m-0 p-0"></div>
        </>
    )
}

export default Otheruser
