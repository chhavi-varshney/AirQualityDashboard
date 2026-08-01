const express = require("express");

const router = express.Router();

const { getAirData } = require("../controllers/airController");

router.get("/", getAirData);

module.exports = router;