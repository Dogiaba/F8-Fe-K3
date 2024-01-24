"use client"
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { handleRemove } from "./action";

const ItemMindMap = ({itemmap, email}) => {
    const pathname = usePathname();
    const route = useRouter();
    const handleClick =(e)=>{
        e.preventDefault();
        route.push(`${pathname}/${itemmap.id}`);
    };
    const handleClickEdit =(e)=>{
        e.preventDefault();
        route.push(`${pathname}/${itemmap.id}`)
    }
  return (
    <div className="hover:bg-gray-200 cursor-pointer bg-white shadow flex items-center mb-5 rounded-lg h-8"
        id={itemmap.id}
        data-id={itemmap.id}
        onClick={handleClick}
    >
      <div className="w-1/6 text-center">
        <input type="checkbox" />
      </div>
      <div className="w-1/2">
        <div className="flex items-center">
          <div className="ml-4">
            <span data-id={itemmap.id} className="capitalize block text-gray-800">
              <a href="#">{itemmap.name}</a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <span className="text-gray-600 text-sm">23/01/2024 17:05:31</span>
      </div>
      <div className="w-1/4">
        <a href="#">
          <span className="text-gray-600 text-sm px-2"
          onClick={handleClickEdit}
          data-id={itemmap.id}>Edit</span>
        </a>
        <span className="text-gray-600 text-sm px-2"
        onClick={(e) =>{
            e.stopPropagation();
            e.preventDefault();
            handleRemove( itemmap.id)
        }}
        >Delete</span>
      </div>
    </div>
  );
};

export default ItemMindMap;
