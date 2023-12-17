import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

const domain = import.meta.env.VITE_APP_AUTHO0_DOMAIN;
const clinetId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
// console.log(domain)
// console.log(clinetId)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    // domain="dev-3ebfuncx2ifzby5i.us.auth0.com"
    // clientId="rCXl7pA2Olw5OxALKY4sKS1t5OKKXo4M"
    // clientId="XK8kO6iW9XDi6HzGc8pa2c2zQikQNZDb"
    domain={domain}
    clientId={clinetId}
    authorizationParams={{
      redirect_uri: window.location.origin
      // redirect_uri:"https://auth0-delta.vercel.app/"
    }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
