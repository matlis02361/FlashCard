import React from "react";
import { useState } from "react";

const backendUrl = "http://localhost:5889";
const _initialUploadFile = {
  preview: "",
  data: "",
  name: "",
};

function Upload({ setTranslations, setCurrentPage }) {
  const [uploadFile, setUploadFile] = useState({ ..._initialUploadFile });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uploadFile.data !== "") {
      e.preventDefault();
      let formData = new FormData();
      formData.append("file", uploadFile.data);
      formData.append("fileName", uploadFile.data.name);
      const response = await fetch(`${backendUrl}/uploadfile`, {
        method: "POST",
        body: formData,
      });
      const translations = await response.json();
      console.log(translations);
      setTranslations(translations);
      setCurrentPage(1); // Ustaw bieżącą stronę na 1 po wysłaniu pliku
      if (response) setStatus(response.statusText);
      document.getElementById("mainForm").reset();
      setUploadFile({ ..._initialUploadFile });
    }
  };

  const handleFileChange = (e) => {
    const newUploadFile = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
      name: e.target.files[0].name,
    };
    setUploadFile(newUploadFile);
  };

  return (
    <>
      <form id="mainForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>XLSX File</label>
          <input
      
            type="file"
            className="form-control-file btn btn-primary file"
            name="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Upload File"
          />
        </div>
      </form>
    </>
  );
}

export default Upload;
