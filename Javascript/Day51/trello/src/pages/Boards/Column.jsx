import React from "react";
import { CiTrash } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./Column.css";
import {Droppable} from "react-beautiful-dnd";
import Task from "./Task";
function Column({title, task, id}) {
  return (
    <div>
      <div className="contents">
        <div className="content">
          <div className="content-left">
            <Task/>
          </div>

          <div>
            <button className="add-column">
              <IoIosAddCircleOutline /> Add Column
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Column;
