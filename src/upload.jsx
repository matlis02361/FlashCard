import React from "react";
import { useState, useEffect } from "react";
import "./scss/upload.scss";
import axios from "axios";

const backendUrl = "http://localhost:5889";
const _initialUploadFile = {
  preview: "",
  data: "",
  name: "",
};

function Upload() {
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
      if (response) setStatus(response.statusText);
      document.getElementById("mainForm").reset();
      setUploadFile({ ..._initialUploadFile });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setStatus("");
    const _uploadFile = {
      name: file.name,
      preview: URL.createObjectURL(file),
      data: e.target.files[0],
    };
    setUploadFile(_uploadFile);
  };

  return (
    <div className="upload">
      <h1>File Uploader</h1>

      <form id="mainForm" onSubmit={handleSubmit}>
        <label>File to upload</label>
        <input type="file" onChange={handleFileChange}></input>
        <div className="buttonArea">
          {uploadFile.name}
          <div className="buttonWrapper">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Upload;
