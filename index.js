// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON (just in case)
app.use(express.json());

// POST /api/apple/auth
app.all('/api/apple/auth', (req, res) => {
  const inputData = req.body;

  // Log to console
  console.log('Received data:', inputData);

  // Prepare a log string with timestamp
  const logEntry = `[${new Date().toISOString()}] ${JSON.stringify(inputData)}\n`;

  // Save to a file called apple_auth_logs.txt in the same directory
  const logFilePath = path.join(__dirname, 'apple_auth_logs.txt');
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

  // Respond to client
  res.json({
    success: true,
    message: 'Data received and logged',
    data: inputData,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
