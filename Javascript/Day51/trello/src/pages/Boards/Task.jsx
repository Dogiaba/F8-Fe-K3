import React from "react";
import { CiTrash } from "react-icons/ci";
import "./Column.css";
import {Droppable} from "react-beautiful-dnd";
import { IoIosAddCircleOutline } from "react-icons/io";
function Task() {
  return (
    <>
      <div className="content-item">
        <div className="list-title">
          <div className="btn-title">
            <textarea className="list-title-textare">Todo</textarea>
          </div>
          <CiTrash className="btn-trash" />
        </div>
        <div className="content-list">
          <div className="content-list-item">
            <p className="content-text">Buy the house</p>
            <button className="btn-item-trash">
              <CiTrash />
            </button>
          </div>
        </div>
      </div>

      <div className="content-item">
        <div className="list-title">
          <div className="btn-title">
            <textarea className="list-title-textare">Todo</textarea>
          </div>
          <CiTrash className="btn-trash" />
        </div>
        <div className="content-list">
          <div className="content-list-item">
            <p className="content-text">Buy the house</p>
            <button className="btn-item-trash">
              <CiTrash />
            </button>
          </div>

          <div className="content-list-item">
            <p className="content-text">Buy the house</p>
            <button className="btn-item-trash">
              <CiTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
