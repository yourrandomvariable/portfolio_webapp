// const express = require('express');
// const bodyParser = require('body-parser');
// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const fs = require('fs');

// const app = express();
// const port = 3000;

// // Replace with the path to your local Google Sheets credentials file and sheet ID
// const credsPath = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTGEykvZ_HN2PFfm7O5mIJ2hSG_ybUapCKYvy28s0C22SQJqJj4vp67_EDlcAZEW3Z5cBEx4IgibuJ-/pubhtmlxs';
// const sheetId = '1GBdxrDOI6_cAE437fqo_vkzRjaS5u3or0k8gYvuy-yo'; // Use the ID from your provided Google Sheets link

// app.use(bodyParser.json());

// app.post('/submit-form', async (req, res) => {
//     try {
//         const { name, email, subject, message } = req.body;

//         // Load credentials before creating the doc instance
//         const creds = require(credsPath);
//         const doc = new GoogleSpreadsheet(sheetId);

//         await doc.useServiceAccountAuth(creds);
//         await doc.loadInfo();

//         // Assuming the first sheet in the document is the one you want to update
//         const sheet = doc.sheetsByIndex[0];
//         await sheet.addRow({ Name: name, Email: email, Subject: subject, Message: message });

//         res.status(200).send('Form submitted successfully!');
//     } catch (error) {
//         console.error('Error submitting form:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
