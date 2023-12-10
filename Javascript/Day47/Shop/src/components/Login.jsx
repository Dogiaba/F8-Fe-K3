import React, { useState } from "react";
import "../assets/styles/styless.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "../config/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "../config/hook";
import { app } from "../config/app";
const Login = () => {
  // const notify = () =>{
  //   // toast("Check");
  //   // toast.success("success!!");

  // }
  const [inputs, setInputs] = useState("");
//  const state = useSelector();
 const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dispatch)
    app.start(inputs)
    try {
      console.log(inputs)
      dispatch({
        type: "login/inpuEmail",
        payload: inputs,
      });

    } catch (error) {
      console.log(error);
      toast.error("Không tìm thấy email");
    }
    setInputs("");
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
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
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
