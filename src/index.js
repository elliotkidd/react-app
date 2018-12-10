import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';

const App = props => {
  return <Navbar title = {
    "abodible"
  }
  />;
};

ReactDOM.render( < App / > , document.getElementById("root"));