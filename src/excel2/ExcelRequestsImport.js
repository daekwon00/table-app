import React from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";

// Masks
const _isInteger = { mask: /^[0-9]*$/ };

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
        console.log(err);
      } else {
        const { cols, rows } = resp;
        this.setState(
          {
            cols: cols,
            rows: rows,
          },
          () => {
            const data = [...rows];
            data.shift();
            this.props.uploadHandler(data);
            // 추가
            // console.log("ExcelRenderer ori", data);
            try {
              data.map((v) => {
                console.log("in", v);
                let count = 0;
                // eslint-disable-next-line array-callback-return
                return v.map((key) => {
                  // console.log(key, count);
                  if (count === 0) {
                    let validEmail = _isEmail.mask.test(key);
                    if (!validEmail) {
                      console.log("email fail", key);
                    }
                  }
                  if (count === 4) {
                    let validPhone = _isPhone.mask.test(key);
                    if (!validPhone) {
                      console.log("phone fail", key);
                      // alert(
                      //   `잘못된 휴대폰 번호입니다. 숫자, - 를 포함한 숫자만 입력하세요. ${key}`
                      // );
                      // return false;
                      throw new Error("에러!");
                    }
                  }
                  count += 1;
                });
              });
              // console.log("ExcelRenderer json", JSON.stringify(data));
            } catch (e) {
              alert(`오류 발생. ${e}`);
            }
          }
        );
      }
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
        <div className="excel-table-wrapper">
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="excel-table"
          />
        </div>
      </div>
    );
  }
}

export default ExcelRequestsImport;
