import React, { useState } from "react";
import "../assets/styles/styless.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "../config/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  // const notify = () =>{
  //   // toast("Check");
  //   // toast.success("success!!");

  // }
  const [inputs, setInputs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatchEvent({
        type: "login/inpuEmail",
        payload: inputs,
      });
    } catch (error) {
      toast.error("Không tìm thấy email");
    }
    setInputs("");
  };
  return (
    <div className="login-form">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <label for="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            className="p-2 rounded"
            // value={inputs}
            onChange={(e) => setInputs(e.target.validity)}
          />
          <button
            type="submit"
            className="font-medium p-2 rounded bg-primary text-light"
            onClick={(e) => notify()}
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
