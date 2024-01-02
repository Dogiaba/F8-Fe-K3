import React, { useState } from "react";
import "../assets/styles/styless.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "../config/hook";
import { getApiKey } from "../config/client";

const Login = ({ setLogin }) => {
 const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = Object.fromEntries([...new FormData(e.target)])

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(data.email.trim() == '') {
      console.warn('Email trong')
    }else if(!emailRegex.test(data.email)) {
      console.warn('Email khong hop le')
    }else {
      getApiKey(data.email).then(res => {
        if(res) {
          localStorage.setItem('apiKey', JSON.stringify(res))
          setLogin(true)
        }
      })
    }
  };

  return (
    <div className="login-form">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            className="p-2 rounded"
            name="email"
          />
          <button
            type="submit"
            className="font-medium p-2 rounded bg-primary text-light"
            // onClick={(e) => notify()}
          >
            Submit
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
