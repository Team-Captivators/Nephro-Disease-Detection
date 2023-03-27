import React, { useState, useRef } from "react";
import UploadService from "./FileUploadService";
import Table from "../table-common";
import './FileUpload.css';
import "bootstrap/dist/css/bootstrap.min.css";
import IMG_S00 from "../images/upload.png"

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const [message, setMessage] = useState([]);
  const [convertError, setConvertError] = useState("");
  const [base64String, setBase64String] = useState(null);
  const progressInfosRef = useRef(null);

  const selectFiles = (event) => {
    setSelectedFiles(event.target.files);

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
        setBase64String(reader.result.split(",")[1]);
    };
    reader.onerror = error => {
        setConvertError(error.toString);
    };
    setProgressInfos({ val: [] });
    setMessage("");
  };

  const fileUpload = (idx, file) => {
    let _progressInfos = [...progressInfosRef.current.val];
    if (convertError === "") {
      return UploadService(base64String, (event) => {
        _progressInfos[idx].percentage = Math.round(
            (100 * event.loaded) / event.total
        );
        setProgressInfos({val: _progressInfos});
        setMessage("");
        setMessage((prevMessage) => ([
            ...prevMessage,
            "Uploading & verifying file: " + file.name + ". This may take a few minutes."
        ]));
      })
      .then((response) => {
        const arrayResponse = JSON.parse(response.data.replace(/'/g, "\""));
        setMessage("");
          const data = [
            {
                sample_type: "Computerized Tomography (CT)",
                disease: "Renal Cell Carcinoma (Tumors)",
                result: arrayResponse[0],
                Confidence_level: 
                <p className="refText">Abnormal growths/ Tumors in kidneys can be benign or cancerous. 
                  <a className="refText a" href="https://www.urologyhealth.org/urology-a-z/k/kidney-cancer"> Find out more.</a>
                </p>,
            },
            {
                sample_type: "Computerized Tomography (CT)",
                disease: "Nephrolithiasis (Stones)",
                result: arrayResponse[1],
                Confidence_level: 
                <p className="refText">A kidney stone is a hard object that is made from chemicals in the urine.
                  <a className="refText a" href="https://www.urologyhealth.org/urology-a-z/k/kidney-stones"> Find out more.</a>
                </p>,
            },
            {
                sample_type: "Computerized Tomography (CT)",
                disease: "Renal Cysts",
                result: arrayResponse[2],
                Confidence_level: 
                <p className="refText">Kidney cysts are round pouches of fluid that form on or in the kidneys.
                  <a className="refText a" href="https://www.kidney.org.uk/kidney-cystsp"> Find out more.</a>
                </p>,
            },
          ];
          setMessage((prevMessage) => ([
              ...prevMessage,
              < Table data={data}/>
          ]));
      })
      .catch((error) => {
        _progressInfos[idx].percentage = 0;
        setProgressInfos({val: _progressInfos});
        setMessage("");
        setMessage((prevMessage) => ([
            ...prevMessage,
            "Verification failed: " + JSON.stringify(error.response.data)
                .replaceAll('"', "")
        ]));
      });
    } else {
      setMessage("");
      setMessage((prevMessage) => ([
          ...prevMessage,
          "Verification failed: Invalid file format!",
      ]));
    }
    setMessage([]);
    };

    const uploadFiles = () => {
      const files = Array.from(selectedFiles);
      let _progressInfos = files.map(file => ({ percentage: 0, fileName: file.name }));
      progressInfosRef.current = {
        val: _progressInfos,
      }

      files.map((file, i) => fileUpload(i, file));
  };

  return (
    <div className="fileborder" id="uploadLink">
        <h1 className="heading">Submit Your CT Report</h1>
        <div className="uploader_section">
          <div className="my-3">

            <div className="col-8">
              <img className="upld_img" src={IMG_S00} height='' width='' alt="" />
              <label className="btn-default-p-0">
                <input type="file" multiple onChange={selectFiles} />
              </label>
              <div className="col-4">
                <button
                  className="upload-btn"
                  disabled={!selectedFiles}
                  onClick={uploadFiles}
                >
                  Upload
                </button>
              </div>
            </div>
            
          </div>

          <div className="upload-card">
            <div className="upload-card-header">Instructions & Guidelines</div>
              <ol className="list-group-item">
                <li>CT scan image should be in a supported file format, such as <b>JPG</b>, <b>JPEG</b>, and <b>PNG</b>.</li>
                <li>The image size range should be between <b>80KB</b> and <b>5MB</b>.</li>
                <li>Do not refresh the page while the process is underway.</li>
                <li>The result is provisional and shall not take any decision unless an advice from a medical professional.</li>
              </ol>
          </div>
        </div>

        {progressInfos && progressInfos.val.length > 0 &&
        progressInfos.val.map((progressInfo, index) => (
          <div className="mb-2" key={index}>
            <div className="progress">
              <div
                className="progress-bar progress-bar-info"
                role="progressbar"
                aria-valuenow={progressInfo.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progressInfo.percentage + "%" }}
              >
                  {progressInfo.percentage}%
              </div>
            </div>
          </div>
        ))}

        <div className="tm_dcv">
          {message.length > 0 && (
            <div className="alert alert-secondary" role="alert">
              {message.map((item, i) => {
                return <p key={i}>{item}</p>;
              })}
            </div>
          )}
        </div>
    </div>
  );
};

export default FileUpload;