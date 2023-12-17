import React from "react";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import HomeProducts from "./components/HomeProducts";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="app">
      {/* <BrowserRouter>
        <Header/>
        <div className="content-container">
          <Switch>
            <Route path="/" exact Component={HomeProducts}/>
            <Route path="/cart" Component={Cart}/>
            <Route path="/not-found" Component={NotFound}/>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
      </BrowserRouter> */}
      <Header/>
      <HomeProducts/>
      <Cart/>
    </div>
  );
}

export default App;
