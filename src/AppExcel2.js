import React, { useState } from "react";
// import ReactDOM from "react-dom";
import ExcelRequestsImport from "./excel2/ExcelRequestsImport";
// import ExcelRequestsImport from "./excel2/ExcelRequestsImport_2";
// import ExcelExampleExport from "./excel2/ExcelExampleExport";
// import { ExcelRenderer, OutTable } from "react-spreadsheet-grid";
import "./excel2/style.css";

// import "./index.css";

export default function App() {
  const [data, setData] = useState([]);

  // const createRequests = () => {
  //   console.log(data);
  // };

  // const worksheets = [
  //   {
  //     name: "Requests",
  //     columns: [
  //       { label: "Full Name", value: "name" },
  //       { label: "Email", value: "email" },
  //       { label: "Template", value: "template" },
  //     ],
  //     data: [
  //       {
  //         name: "Bob Ross",
  //         email: "boss_ross@gmail.com",
  //         template: "Accounts Receivables",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div>
      {/* <ExcelExampleExport filename="requests.xlsx" worksheets={worksheets} /> */}
      <ExcelRequestsImport uploadHandler={setData} />
      {/* <button onClick={createRequests}>Create</button> */}
    </div>
  );
}
