const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ======================
// Signup Controller
// ======================

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check empty fields
    // Validation
if (!name || !email || !password) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

if (name.trim().length < 3) {
  return res.status(400).json({
    success: false,
    message: "Name must be at least 3 characters long",
  });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Invalid email format",
  });
}

if (password.length < 6) {
  return res.status(400).json({
    success: false,
    message: "Password must be at least 6 characters long",
  });
}

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const userResponse = {
  _id: user._id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  createdAt: user.createdAt,
};

res.status(201).json({
  success: true,
  message: "Signup Successful",
  user: userResponse,
});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
  return res.status(400).json({
    success: false,
    message: "Email and Password are required",
  });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Invalid email format",
  });
}

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
}

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
}

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const userResponse = {
  _id: user._id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  createdAt: user.createdAt,
};

res.status(200).json({
  success: true,
  message: "Login Successful",
  token,
  user: userResponse,
});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const logout = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logout Successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  signup,
  login,
  getCurrentUser,
  logout,
};