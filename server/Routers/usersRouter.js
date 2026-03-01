import express from "express";
import db from "../dbConnection.js";

const router = express.Router();

// ---------------- LOGIN ----------------
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query(
      "SELECT \"userID\", username, email FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.json(result.rows[0]);
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

    const existing = await db.query(
      "SELECT \"userID\" FROM users WHERE username = $1",
      [username]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const result = await db.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING \"userID\"",
      [username, password, email || null]
    );

    res.status(201).json({
      userID: result.rows[0].userID,
      username,
      email: email || null,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;