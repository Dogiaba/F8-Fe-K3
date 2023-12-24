import React, { useEffect, useState } from 'react'
import Login from './pages/Login/Login'
import Boards from './pages/Boards/Boards'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {client} from "./config/client"

function App() {
  const apikey = JSON.parse(localStorage.getItem("apikey"));
  const [isLogin, setLogin] = useState(false)

  useEffect(()=>{
    if(apikey){
      setLogin(true);
    }
  },[])
  client.setApiKey
  return (
    <div>
      <ToastContainer />
      {isLogin ?  <Boards/> : <Login setLogin={setLogin}/> }
    </div>
  )
}

export default App