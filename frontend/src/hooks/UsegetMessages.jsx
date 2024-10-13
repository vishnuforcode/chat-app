import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/Messageslice'




const UsegetMessages = () => {

    const { selecteduser } = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchmessages = async () => {
            try {

                axios.defaults.withCredentials = true;
                const res = await axios.get(`${process.env.Api_url}/api/v1/message/${selecteduser?._id}`)
                // console.log(res.data) ;

                dispatch(setMessages(res.data));

            } catch (error) {
                console.log(error);

            }
        }
        fetchmessages();
    }, [ selecteduser?._id ,setMessages ])
}

export default UsegetMessages
