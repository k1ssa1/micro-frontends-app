import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "Home/Header";
import Footer from "Home/Footer";
import SafeComponent from "./safeComponent"
const App = () => (
  <div className="container">
    <SafeComponent>
        <Header/>
    </SafeComponent>
    <div className="page-content">
      <div className="col-12">
      <h4>Pdp content</h4>
      </div>
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
