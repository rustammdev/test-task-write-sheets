const axios = require("axios");
const { API_BASE_URL } = require("./config");

async function getClients(token) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/clients?limit=1000&offset=1000`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Clients:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { getClients };
