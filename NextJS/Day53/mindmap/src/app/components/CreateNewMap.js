"use client"
import React from "react";
import { handleAdd } from "./action";
const CreateNewMap = ({email}) => {
  return (
    <>
      <div className="py-4"
      onClick={(e) => {handleAdd(email);}}
      >
        <a className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300" href="#">Thêm mới</a>
      </div>
    </>
  );
};

export default CreateNewMap;
