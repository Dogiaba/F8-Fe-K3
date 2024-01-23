import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/Styles/Styles.css";

const TodoList = ({ todoList }) => {
  return (
    <div className="container bg-slate-700 p-4 flex flex-col flex bg-warning bg-gradient">
      <ul className="list-disc w-full max-w-3xl flex flex-col gap-4">
        {todoList.map((item, index) => (
          <li key={index} className="rounded bg-white shadow-md px-4 pt-4 pb-5 flex flex-col my-2">
            {item}
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
