import React from "react";
import { toast } from "react-toastify";
import "./Login.css";

import { getApiKey } from "../../config/client.js";

function Login({ setLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries([...new FormData(e.target)]);

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (data.email.trim() == "") {
      toast.warn("Email trong");
    } else if (!emailRegex.test(data.email)) {
      // toast.warn("Email không hợp lệ");
      console.warn('Email khong hop le')
    } else {
      getApiKey(data.email).then(res => {
        if (res) {
          localStorage.setItem("apikey", JSON.stringify(res));
          setLogin(true);
        }
      });
    }
  };

  return (
    <div className="login-form">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email" className="font-medium">
            Enter The Email
          </label>
          <input
            type="email"
            placeholder="enter you email"
            className="rounded"
            name="email"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
