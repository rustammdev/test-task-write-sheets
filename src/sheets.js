const { google } = require("googleapis");

async function writeToSheet(data) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: "Sheet1!A1",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          "ID",
          "First Name",
          "Last Name",
          "Gender",
          "Address",
          "City",
          "Phone",
          "Email",
          "Status",
        ],
        ...data.map((client) => [
          client.id,
          client.firstName,
          client.lastName,
          client.gender,
          client.address,
          client.city,
          client.phone,
          client.email,
          client.status,
        ]),
      ],
    },
  });

  console.log("Data written to Google Sheet");
}

module.exports = { writeToSheet };
