import axios from "axios";

const api_url = "http://192.168.1.71:7071/api/nephro_ai" // "https://nephroapi.azurewebsites.net/api/nephro_ai";
const upload = (base64String, onUploadProgress) => {

    const data = JSON.stringify({
        "img": base64String
    });

    return axios.post(api_url, data, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        },
        onUploadProgress,
    });
};

export default upload;