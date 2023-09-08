require("dotenv").config();

const API_KEY = process.env.API_KEY;
const ENDPOINT = process.env.ENDPOINT;

function responseHandler(status, data) {
  return {
    statusCode: status,
    headers: {
      "Access-Control-Allow-Origin": "https://know-your-aircraft.netlify.app/",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
    body: JSON.stringify(data),
  };
}

exports.handler = async function (event, context) {
  const secFetchMode = event.headers["sec-fetch-mode"];
  const secFetchSite = event.headers["sec-fetch-site"];

  if (secFetchMode === "cors" && secFetchSite === "same-origin") {
    let { manufacturer, limit } = event.queryStringParameters;

    // manufacturer = manufacturer || 'boeing';
    // limit = limit || 3;

    if (!manufacturer || !limit) {
      return responseHandler(400, { message: "Search paramether(s) missing" });
    }

    try {
      const url = `${ENDPOINT}?manufacturer=${manufacturer}&limit=${limit}`;
      // const url = `${ENDPOINT}?manfacturer=${manufacturer}&limit=${limit}`;

      const data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": API_KEY,
        },
      });

      const resp = await data.json();

      if (Array.isArray(resp)) {
        return responseHandler(200, resp);
      } else {
        return responseHandler(400, resp);
      }
    } catch (err) {
      /* Error requesting API */
      const message = { 
        message: "Error fetching data in Function",
        error: err.message,
      };
      return responseHandler(500, message);
    }
    
    
  } else {
    /* Access from unauthorized origin */
    const message = { message: "Access denied from this origin" };
    return responseHandler(403, message);
  }
};
