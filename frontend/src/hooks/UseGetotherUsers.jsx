import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/UserSlice';
const UseGetotherUsers = () => {


    const dispatch = useDispatch();


    useEffect(() => {
        const fetchOtheruser = async () => {
            try {
                
                axios.defaults.withCredentials = true;

                const res = await axios.get('https://yaps-u6up.onrender.com/api/v1/user/');

                // console.log(res);
                // store
                dispatch(setOtherUsers(res.data))

                
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtheruser();
    }, [dispatch])
}

export default UseGetotherUsers
