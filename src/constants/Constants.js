const API_URL_LOCAL = "http://localhost:9000";
const API_URL_PROD = "https://api.michaeljohnson.xyz";

function getApiUrl() {
  if(window.location.hostname === "localhost") {
    return API_URL_LOCAL;
  } else {
    return API_URL_PROD;
  }
}


export const PAPER_MARGIN = '0%';
export const API_URL = getApiUrl();
