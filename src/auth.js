const axios = require("axios");
const { API_BASE_URL } = require("./config");

async function createUser(username) {
  const userData = {
    username,
  };

  const response = await axios.post(
    `${API_BASE_URL}/auth/registration`,
    userData
  );
  console.log("User Created:", response.data);
  return response.data;
}

async function getToken(username) {
  const loginData = {
    username,
  };

  const response = await axios.post(`${API_BASE_URL}/auth/login`, loginData);
  return response.data.token;
}

module.exports = { createUser, getToken };
