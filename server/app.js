
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const authRoutes = require("./routes/authRoutes");
const airRoutes = require("./routes/airRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/air", airRoutes);

app.get("/", (req, res) => {
  res.send(" Air Quality Analytics Dashboard API Running");
});

module.exports = app;