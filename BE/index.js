const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors()); // Cho phép frontend gọi API
app.use(express.json()); // Parse JSON body

// API test
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
