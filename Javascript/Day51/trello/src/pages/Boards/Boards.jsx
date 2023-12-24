import React from "react";
import { CiStar } from "react-icons/ci";
import { FaEarthAfrica } from "react-icons/fa6";
import "./Boards.css";
import {Droppable} from "react-beautiful-dnd";
import vietnamImg from "../../assets/imgs/vietnam.png";
import Column from "./Column";

function Boards() {
  return (

    <div className="boards">
      <main>
        <div className="container">
          <div className="header">
            <span className="header-left">
              <h2>Project Management</h2>
              <CiStar className="p-icon" />
              <FaEarthAfrica className="p-icon" />
            </span>
            <span className="header-right">
              <div className="darkMode p-icon ">Dark</div>
              <div className="avata">
                {/* <img src={bankImg} alt="image"/> */}
                <img src={vietnamImg} alt="image" />
                <img src={vietnamImg} alt="image" />
                <img src={vietnamImg} alt="image" />
                {/* <span className='numNember p-icon'>+5</span> */}
              </div>
            </span>
          </div>
          <Column/>
        </div>
      </main>
    </div>
  );
}

export default Boards;
