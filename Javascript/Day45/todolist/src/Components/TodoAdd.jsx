import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/Styles/Styles.css";

const TodoAdd = ({onGetTodo})=> {
  const[name, setName] = useState("");
  const handleChange = (e)=>{
    setName(e.target.value);
    console.log("ok" +  setName(e.target.value))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    onGetTodo(name);
    setName("")
  }
  return (
    <div className="mx-auto p-5">
      <div className="container bg-slate-700 p-4 flex flex-col flex bg-warning bg-gradient">
       <div className="mx-auto w-full max-w-3xl px-4 py-6 ">
          <h1 className="text-center">Welcome to Todo App!</h1>
          <form action="" onSubmit={handleSubmit} className="pagination justify-content-center">
            <div className="flex items-center border-b  py-2">
              <input
                id="task"
                name="task"
                type="text"
                placeholder="Thêm một việc làm mới"
                className=" bg-transparent px-2 w-full mr-3 py-1  focus:outline-none text-white h5 pb-2 mb-4 inputBtn"
                autoFocus
                onChange={handleChange}
                value={name}
              />
              <button
                
                className=" hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-shrink-0 btn btn-success"
              >
                Thêm mới
              </button>
            </div>
          </form>
          {/* <ul className="list-disc w-full max-w-3xl flex flex-col gap-4">
            <li className="rounded bg-white shadow-md px-4 pt-4 pb-5 flex flex-col my-2">
              không có todo
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
