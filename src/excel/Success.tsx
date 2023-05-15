import React from "react";
import styled from "styled-components";
// import { LoadingOutlined } from "@ant-design/icons";
import useViewModel from "./useViewModel";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  border-radius: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;

  border: 1px solid #000;
  background: #e5e5e5;
  padding: 20px;
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(1px);

  & svg {
    width: 64px;
    height: 64px;
  }
`;
const ExcelButton = styled.a`
  border-radius: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;

  border: 1px solid #000;
  background: #e5e5e5;
  padding: 20px;
  text-decoration: none;
  color: #000;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > ul {
    display: flex;
    list-style: none;

    & div {
      margin-right: 20px;
    }
  }
`;

// const ExcelUploadButton = () => {
const Success = () => {
  const viewModel = useViewModel();

  return (
    <Wrapper>
      <InputWrapper>
        <ExcelButton href="/files/exam.xlsx" target="_blank" download>
          엑셀 양식 다운로드
        </ExcelButton>
        <Input
          id="excelUpload"
          type="file"
          onChange={viewModel.handleImport}
          accept="application/*"
        />
        <Label htmlFor="excelUpload">엑셀 업로드 test</Label>
      </InputWrapper>
      {viewModel.loading && (
        <Loading>
          {/* <LoadingOutlined></LoadingOutlined> */}
          {/* {"loading..."} */}
        </Loading>
      )}
      <DataWrapper>
        {viewModel.data.map((v) => (
          <ul>
            {Object.keys(v).map((key) => {
              return (
                <>
                  <li>{key}: </li>
                  <div>{v[key]}</div>
                </>
              );
            })}
          </ul>
        ))}
      </DataWrapper>
    </Wrapper>
  );
};

// export default ExcelUploadButton;
export default Success;
