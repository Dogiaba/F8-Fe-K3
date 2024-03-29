"use client";
import React, { useState } from "react";
import { IoSave } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { useReactFlow } from "reactflow";
import ModalShare from "./ModalShare";
import { mutate } from "swr";
import { toast } from "react-toastify";

const ActionButton = ({ id, serverData }) => {
  console.log(id)
  const [name, setName] = useState(serverData.name);
  const reactFlow = useReactFlow();

  async function handSave(e) {
    e.preventDefault();
    e.stopPropagation();
    // const react_flow = document.querySelector(".react_flowAll");
    // await react_flow.click();
    console.log(`${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          dataNodes: [...reactFlow.getNodes()],
          dataEdges: [...reactFlow.getEdges()],
        }),
      }
    );
    if(response.ok){
      mutate(
        `${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`
      )
      toast.success("Save ok")
      console.log(`${process.env.NEXT_PUBLIC_SERVER_API}/project_mindmap/${id}`)
    }else{
      toast.error("Save error")
    }
  }
  const handleChangeTitleMap =(e)=> {
    e.preventDefault();
    setName(e.target.value);
    document.title = e.target.value;
};
  return (
    <>
      <div className="fixed top-16 w-full h-14 z-[30] items-center justify-between bg-black/50  flex  px-6 gap-x-4 text-white">
        <input
          className="outline-none bg-transparent mr-1"
          placeholder="Bản đồ tư duy chưa có tên"
          type="text"
          onChange={handleChangeTitleMap}
          value={name}
        />
        <div className="ml-auto flex items-center gap-4">
          <button onClick={handSave} className="flex items-center">
            <IoSave />
            <span>Lưu thay đổi</span>
          </button>
          <div className="flex items-center">
          <ModalShare id={id} serverData={serverData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionButton;
