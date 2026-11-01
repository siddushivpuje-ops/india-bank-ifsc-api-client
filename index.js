// npm install axios
const axios = require("axios");

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "YOUR_RAPIDAPI_KEY";
const RAPIDAPI_HOST = "YOUR-RAPIDAPI-HOST.p.rapidapi.com"; // from your RapidAPI dashboard

async function getBranch(ifsc) {
  try {
    const res = await axios.get(`https://${RAPIDAPI_HOST}/api/v1/ifsc/${ifsc}`, {
      headers: {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": RAPIDAPI_HOST,
      },
    });
    console.log(res.data);
  } catch (err) {
    console.error(err.response?.status, err.response?.data ?? err.message);
  }
}

getBranch("SBIN0005943");
