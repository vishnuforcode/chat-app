import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { io } from "socket.io-client";
import { setSocket } from "./redux/socketSlice";
import { setOnlineUsers } from "./redux/UserSlice";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socketio = io("http://localhost:8000", {
        query: {
          userid: authUser._id
        }
      });
      dispatch(setSocket(socketio));

      socketio?.on('getOnlineUsers', (onlineusers) => {
        dispatch(setOnlineUsers(onlineusers))
      });

      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className="App p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
