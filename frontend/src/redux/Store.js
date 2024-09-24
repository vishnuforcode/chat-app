import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './UserSlice.js'
import messageReducer from './Messageslice.js'
import socketreducer from "./socketSlice.js";


import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  import storage from 'redux-persist/lib/storage';
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({ 
    user : userReducer,
    message : messageReducer,
    socket: socketreducer,
})

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer ,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      
        // devtools : process.env.NODE_ENV !== 'production' ,
    
})

export default store ;