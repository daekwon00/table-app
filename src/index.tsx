import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import App from "./AppBasic";
// import App from "./AppKitchenSink";
// import App from "./AppEditable7";
// import App from "./AppEditable";
// import App from "./AppEditableCh";
// import App from "./AppImageOpen";
// import App from "./AppStudy";
// import * as serviceWorker from "./study/serviceWorker";

// import data from "./data/staff.json";
// import StaffTable from "./test/StaffTable";

// import App from "./AppExcel";
// import reportWebVitals from "./reportWebVitals";

// import App from "./AppExcel2";

import App from "./AppRowSlect";

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
// reportWebVitals();

// study 에서 사용됨.
// serviceWorker.unregister();
