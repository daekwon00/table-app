import React, { useCallback, useState } from "react";
import { read, utils, writeFile } from "xlsx";

function useViewModel() {
  const [loading, setLoading] = useState(false);
  const [dataCheck, setDataCheck] = useState(false);
  const [data, setData] = useState([]);

  function handelExcelToCardUpload(data: any) {
    setData(data);
  }

  const handleImport = useCallback(async (event: any) => {
    setLoading(true);

    const { files } = event.target;
    if (!files[0].name.includes(".xlsx")) console.log(1);
    if (files.length) {
      const file = files[0];
      const reader = await new FileReader();

      reader.onload = async (e: any) => {
        try {
          const wb = read(e.target.result);
          const sheets = wb.SheetNames;

          if (sheets.length) {
            console.log("excel length");
            const data = utils.sheet_to_json(wb.Sheets[sheets[0]]);
            if (data.length > 1) {
              console.log("excel length > 1");
              await handelExcelToCardUpload(data);

              // excel 유효성 검사를 아래에 한다.
              console.log("excel data", JSON.stringify(data));

              setDataCheck(true);

              setLoading(false);
            } else {
              setLoading(false);
              setDataCheck(false);
            }
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
          setDataCheck(false);
        }
      };

      // data 를 비동기로 읽어 주는 객체
      await reader.readAsArrayBuffer(file);
    }
  }, []);

  return { loading, data, handleImport, dataCheck };
}

export default useViewModel;
