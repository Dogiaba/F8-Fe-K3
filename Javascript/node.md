//Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

function minElement(array) {
  //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let min = array[0];
  let min_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (min > array[i]) {
      //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
      min = array[i];
      min_index = i;
    }
  }
  console.log("min= ", min);
  console.log("min_index= ", min_index);
}

// Function to find the maximum value
function maxElement(array) {
  //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
  let max = array[0];
  let max_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
  for (let i = 0; i < array.length; ++i) {
    if (max < array[i]) {
      //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
      max = array[i];
      max_index = i;
    }
  }
  console.log("max= ", max);
  console.log("max_index= ", max_index);
}

let arr = [9, 2, 12, 5, 90, 3, 6];
minElement(arr);
maxElement(arr);

<!-- ===================================================================================== -->


import { config } from "./config.js";
import {requestRefresh} from "./utils.js";
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API,
  token:null,
  setToken:function(tokens){
    this.token = tokens;
  },
  requestRefresh:null,
  setUrl: function (url) {
    this.serverApi = url;
  },
  send: async function (path, method = "GET", body = null) {
    //nối chuỗi
    const url = `${this.serverApi}${path}`;
    //tác vụ call api
    const headers = {
      "Content-Type": "application/json",
    };
    if(this.token){
      headers["Authorization"] = `Bearer ${this.token}`
    }
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    try {
      const response = await fetch(url, options);
       //Response
      //Check token ở đây --> Nếu hết hạn -> Gọi API Refresh -> Lưu lại -> Gọi lại hàm send()
      if(!response.ok){
        const newToken = await requestRefresh(this);
        if(newToken){
          //xử lý --> Lưu token vào localStorage
          this.token = newToken.data.token.accessToken;
          console.log(this.token)
          //xử lý -> Gọi lại hàm send
          return this.send(path, method, body);
        }
        console.log(newToken)
      }
      const data = await response.json();
      return { response, data };
    } catch (e) {
      throw new Error(e);
    }
  },
  get: function (url) {
    //call API với get method
    return this.send(url);
  },
  post: function (url, body) {
    //Call API với post method
    return this.send(url, "POST", body);
  },
  put: function (url, body) {
    //call api với put method
    return this.send(url, "PUT", body);
  },
  patch: function (url, body) {
    //callapi với path method
    return this.send(url, "PATH", body);
  },
  delete: function (url) {
    //callapi voiws delete
    return this.send(url, "DELETE");
  },
};


