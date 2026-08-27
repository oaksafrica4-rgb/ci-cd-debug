const express = require("express");
const request = require("supertest");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/", (req, res) => {
  res.send("DevOps Interview Application");
});
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
