require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;
require("./conn");

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

// Test route to fix the 404 error
app.get("/", (req, res) => {
  res.status(200).json({ status: "ScoreMyCV backend is running" });
});

const UserRoutes = require("./Routes/user");
const ResumeRoutes = require("./Routes/resume");

app.use("/api/user", UserRoutes);
app.use("/api/resume", ResumeRoutes);

app.listen(PORT, () => console.log("our backend is running ", PORT));

// Required for Vercel deployment
module.exports = app;