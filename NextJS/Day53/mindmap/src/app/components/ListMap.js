
import React from "react";
import ItemMindMap from "./ItemMindMap";
import CreateNewMap from "./CreateNewMap";

const getProjects = async (url) => {
    const response = await fetch(
        `${process.env.SERVER_API}/project_mindmap?user_id=${url}`,
        {
            cache: "no-cache",
        }
    );

    console.log(
        "have problem",
        `${process.env.SERVER_API}/project_mindmap?user_id=${url}`
    );
    return await response.json();
};

async function ListMap ({email})  {
    const itemMaps = await getProjects(email)
    console.log(email)
  return (
    <>
    <CreateNewMap email={email}/>
      <div className="py-4">
        <div className="flex items-center py-2">
          <span className="w-1/6 text-center">
            <input type="checkbox" />
          </span>
          <span className="w-1/2">
            <span className="text-xs uppercase text-gray-600 font-bold">
              Ten
            </span>
          </span>
          <span className="w-1/4">
            <span className="text-xs uppercase text-gray-600 font-bold">
              Luc tao
            </span>
          </span>
          <span className="w-1/4">
            <span className="text-xs uppercase text-gray-600 font-bold">
              Hanh Dong
            </span>
          </span>
        </div>
      </div>
      {itemMaps.map((itemmap)=>{
        return(
            <ItemMindMap email={email} key={itemmap.id} itemmap={itemmap}/>

        )
      })}
     

    </>
  );
};

export default ListMap;
