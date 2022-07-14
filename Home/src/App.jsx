import React from "react";
import ReactDOM from "react-dom";
import bootstrap from 'bootstrap' 

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="container">
    <Header app={{name: "Home"}}/>
    <div className="page-content">
      <div className="col-12">
      <h4>Homepage content</h4>
      </div>
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
