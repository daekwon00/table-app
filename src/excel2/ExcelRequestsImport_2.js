import React from "react";
import { ExcelRenderer } from "react-excel-renderer";

// Masks
const _isPhone = { mask: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/ };

const _isEmail = {
  mask: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
};

class ExcelRequestsImport extends React.Component {
  state = {
    cols: [],
    rows: [],
  };

  uploadFile = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log("error 발생 log", err);
      } else {
        const { cols, rows } = resp;
        // this.setState(
        //   {
        //     cols: cols,
        //     rows: rows,
        //   },
        //   () => {
        const data = [...rows];
        data.shift();
        this.props.uploadHandler(data);
        try {
          data.map((v) => {
            // console.log("in", v);
            let count = 0;
            // eslint-disable-next-line array-callback-return
            return v.map((key) => {
              if (count === 0) {
                let validEmail = _isEmail.mask.test(key);
                if (!validEmail) {
                  console.log("email fail", key);
                }
              }
              if (count === 4) {
                let validEmail = _isEmail.mask.test(key);
                if (!validEmail) {
                  console.log("email fail", key);
                }
              }
              count += 1;
            });
          });
        } catch (e) {
          alert(`오류 발생. ${e}`);
        }
      }
      //     );
      //   }
    });
  };

  render() {
    return (
      <div className="excel-import-container">
        <div className="file-upload">
          <label>Upload File</label>
          <input type="file" onChange={this.uploadFile} />
          <button>+</button>
        </div>
        {/* <div className="excel-table-wrapper">
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="excel-table"
          />
        </div> */}
      </div>
    );
  }
}

export default ExcelRequestsImport;
