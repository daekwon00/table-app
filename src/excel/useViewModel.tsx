import React, { useCallback, useState } from "react";
import { read, utils, writeFile } from "xlsx";

function useViewModel() {
  const [loading, setLoading] = useState(false);
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
            const data = utils.sheet_to_json(wb.Sheets[sheets[0]]);
            if (data.length > 1) {
              await handelExcelToCardUpload(data);
              setLoading(false);
            } else {
              setLoading(false);
            }
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };

      await reader.readAsArrayBuffer(file);
    }
  }, []);

  return { loading, data, handleImport };
}

export default useViewModel;
