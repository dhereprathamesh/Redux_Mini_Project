import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Card from "../../Common/Card/Card";
import { Provider } from "react-redux";
import Product from "../ProductList/Product";
import store from "../../Store";
import ViewCart from "../../Pages/ViewCart/ViewCart";

class Main extends Component {
  render() {
    console.warn(store)
    return (
      <div>
        
        <Provider store={store}>
        
          <Navbar/>


          <Routes>
          <Route path="/home" element={< Product/>}/>
          <Route path="/mycart" element={<ViewCart />} />
          </Routes>

          
        </Provider>
      </div>
    );
  }
}

export default Main;
