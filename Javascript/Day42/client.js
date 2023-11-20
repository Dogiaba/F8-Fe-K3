import { config } from "./config.js";
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API,
  token:null,
  setUrl: function (url) {
    this.serverApi = url;
  },
  setToken: function(token){
    this.token = token;
  },
  send: async function (url, method = "GET", body = null) {
    //nối chuỗi
    url = `${this.serverApi}${url}`;
    //tác vụ call api
    const headers = {
      "Content-Type": "application/json",
    };
    if(this.token){
      headers["Authorization"]= `Bearer ${this.token}`
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
