import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ImageComponent from "./image/ImageComponent";

export const App = () => {
  return (
    <div className="App">
      <h1>Modal popup</h1>
      <h4>To trigger the popup click the picture, please! </h4>
      <ImageComponent />
    </div>
  );
};

export default App;
