import { toast } from "react-toastify";
import { config } from "./configs.js";
const { SERVER_API } = config;

export const getApiKey = async email => {
  const response = await fetch(config.SERVER_API + "/api-key?email=" + email)
  const data = await response.json()

  console.log(data)
  if(response.ok) {
    return data.data.apiKey
  }
}

export const client = {
  serverApi: SERVER_API,
  apiKey:null,
  setApiKey(apiKey){
    this.apiKey = apiKey
  },
  setUrl: function (url) {
    this.serverApi = url;
  },
  send: async function (url, method = "GET", body = null) {
    //nối chuỗi
    url = `${this.serverApi}${url}`;
    //tác vụ call api
    const headers = {
      "Content-Type": "application/json",
    };
    if(this.apiKey){
      headers["X-Api-Key"]= `${this.apiKey}`
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
      if(!response.ok) {
        if(response.status == 401) {
          toast.error("Co loi xay ra, dang nhap lai", {
            onClick: () => {
              location.reload()
            }
          })
        }
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
