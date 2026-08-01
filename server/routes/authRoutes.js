const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  getCurrentUser,
  logout,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");
router.post("/logout", authMiddleware, logout);
router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware, getCurrentUser);
router.post("/logout", authMiddleware, logout);

module.exports = router;