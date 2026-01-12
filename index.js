// server.js or app.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// POST /api/apple/auth
app.post('/api/apple/auth', (req, res) => {
  const inputData = req.body; // All form parameters will be here
  res.json({
    success: true,
    data: inputData, // Return all received parameters
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
