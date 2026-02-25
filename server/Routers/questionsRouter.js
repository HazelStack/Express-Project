import express from "express";
import db from "../dbConnection.js";

const router = express.Router();

// GET all questions
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        q.questionID,
        q.title,
        u.username,
        c.name AS category
      FROM questions q
      JOIN users u ON q.userID = u.userID
      JOIN categories c ON q.categoryID = c.categoryID
      ORDER BY q.questionID DESC
    `);

    res.json(rows);

  } catch (error) {
    console.error("Query error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;