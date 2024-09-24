import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import store from "./redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from "redux-persist/es/persistStore";
import { BrowserRouter } from "react-router-dom";

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      <Toaster />
      </PersistGate>
    </Provider>
   
  </React.StrictMode> 
);
