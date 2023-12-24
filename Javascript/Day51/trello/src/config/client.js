import { config } from "./config";
import { toast } from "react-toastify";

const { SERVER_API } = config;

export const getApiKey = async email => {
  const response = await fetch(config.SERVER_API + "/api-key?email=" + email);
  const data = await response.json();

  console.log(data);
  if (response.ok) {
    return data.data.apiKey;
  }
};

export const client = {
  serverApi: SERVER_API,
  apikey: null,
  setApiKey(apikey) {
    this.apikey = apikey;
  },
  setUrl: function (url) {
    this.serverApi = url;
  },
  send: async function (url, method = "GET", body = null) {
    url = `${this.serverApi}${url}`;

    const headers = {
      "Content-Type": "application/json",
    };
    if (this.apikey) {
      headers["X-Api-Key"] = `${this.apiKey}`;
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
      if (!response.ok) {
        if (response.status == 401) {
          toast.error("Có lỗi, mời bạn nhập lại!", {
            onClick: () => {
              location.reload();
            },
          });
        }
      }
      const data = await response.json();
      return { response, data };
    } catch (e) {
      throw new Error(e);
    }
  },
  get: function (url) {
    return this.send(url);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
  put: function (url, body) {
    return this.send(url, "PUT", body);
  },
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url, body) {
    return this.send(url, "DELETE", body);
  },
};
