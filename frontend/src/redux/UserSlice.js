import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUsers: null,
        selecteduser : null,
        onlineusers: null , 
    },
    reducers:{
        setAuthUser : (state , action)=>{
            state.authUser = action.payload;
        },
        setOtherUsers:(state , action)=>{
            state.otherUsers = action.payload
        },
        setSelectedUser:(state ,action)=>{
            state.selecteduser = action.payload ;
        },
        setOnlineUsers: (state, action)=>{
            state.onlineusers = action.payload;
        }
    
         },
})

export const {setOtherUsers , setAuthUser , setSelectedUser , setOnlineUsers}= userSlice.actions;
export default userSlice.reducer;