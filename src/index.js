const { createUser, getToken } = require("./auth");
const { getClients } = require("./clients");
const { writeToSheet } = require("./sheets");

async function main() {
  try {
    // user registration
    await createUser("Rustam6eko");

    // user login
    const token = await getToken("Rustam6eko");

    // Get clients
    const clients = await getClients(token);

    // Write to sheets
    await writeToSheet(clients);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
