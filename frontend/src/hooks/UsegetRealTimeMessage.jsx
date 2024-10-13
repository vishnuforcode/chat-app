import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { setMessages } from "../redux/Messageslice";

const UsegetRealTimeMessage = () =>{
    const {socket} = useSelector(store=> store.socket);
    const {messages} = useSelector(store=> store.message)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        socket?.on("newMessage" ,(newmessage)=>{
            // console.log(newmessage)
            // console.log(Array.isArray(newmessage));
            
            dispatch(setMessages([...messages , newmessage]))
        });
        return ()=> socket?.off("newmessage")
         
    } , [ socket ,messages ,dispatch, setMessages ])
};

export default UsegetRealTimeMessage;