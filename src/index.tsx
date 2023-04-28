import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import App from "./App_Basic";
// import App from "./App_KitchenSink";
import App from "./App_editable_v7";

import data from "./data/staff.json";
import StaffTable from "./test/StaffTable";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <StaffTable data={data} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
