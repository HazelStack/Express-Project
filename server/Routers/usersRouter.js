import express from "express";
import db from "../dbConnection.js";

const router = express.Router();

// ---------------- LOGIN ----------------
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT userID, username, email FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------- REGISTER ----------------
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Check if user exists
    const [existing] = await db.query(
      "SELECT userID FROM users WHERE username = ?",
      [username]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const [result] = await db.query(
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
      [username, password, email || null]
    );

    res.status(201).json({
      userID: result.insertId,
      username,
      email: email || null,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;