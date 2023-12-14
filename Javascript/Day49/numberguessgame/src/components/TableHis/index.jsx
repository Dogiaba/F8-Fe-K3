import "../TableHis/TableHistory.css";
import { CiTrash } from "react-icons/ci";
function TableHis() {
  return (
    <div className="container">
      <button className="trash_btn"><CiTrash /></button>
      <div className="table_container">
        <table className="table_content">
          <thead>
            <tr>
              <th>Số lần nhập</th>
              <th>Số nhập vào</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
        <div className="total_number">
          <p className="infor_his">Lần chơi thứ: <span>3</span>/<span>3</span></p>
          <p className="infor_his">Số lần nhập tối đa: <span className="numInforHisMi">8</span></p>
          <p className="infor_his ratio">Tỷ lệ đúng:<span>27.27</span>%</p>
        </div>
      </div>
    </div>
  );
}

export default TableHis;
