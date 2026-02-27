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
// GET single question with its answers
router.get("/:id", async (req, res) => {
  try {
    const questionID = req.params.id;

    // 1️⃣ Get the question
    const [questionRows] = await db.query(`
      SELECT 
        q.questionID,
        q.title,
        u.username,
        c.name AS category
      FROM questions q
      JOIN users u ON q.userID = u.userID
      JOIN categories c ON q.categoryID = c.categoryID
      WHERE q.questionID = ?
    `, [questionID]);

    if (questionRows.length === 0) {
      return res.status(404).json({ message: "Question not found" });
    }

    // 2️⃣ Get answers for that question
    const [answerRows] = await db.query(`
      SELECT 
        a.answerID,
        a.content,
        u.username
      FROM answers a
      JOIN users u ON a.userID = u.userID
      WHERE a.questionID = ?
      ORDER BY a.answerID ASC
    `, [questionID]);

    // 3️⃣ Send combined response
    res.json({ ...questionRows[0], answers: answerRows })

  } catch (error) {
    console.error("Error fetching question:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// POST an answer to a specific question
router.post("/:id/answers", async (req, res) => {
  try {
    const questionID = req.params.id;
    const { content, userID } = req.body;

    if (!content || !userID) {
      return res.status(400).json({ message: "Missing content or userID" });
    }

    // Insert answer into the database
    const [result] = await db.query(
      "INSERT INTO answers (content, questionID, userID) VALUES (?, ?, ?)",
      [content, questionID, userID]
    );

    res.status(201).json({
      message: "Answer added successfully",
      answerID: result.insertId
    });

  } catch (error) {
    console.error("Error adding answer:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// GET /questions/category/:categoryID
router.get("/category/:categoryID", async (req, res) => {
  try {
    const categoryID = req.params.categoryID;

    const [rows] = await db.query(
      `SELECT 
         q.questionID,
         q.title,
         u.username,
         c.name AS category
       FROM questions q
       JOIN users u ON q.userID = u.userID
       JOIN categories c ON q.categoryID = c.categoryID
       WHERE q.categoryID = ?
       ORDER BY q.questionID DESC`,
      [categoryID]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
export default router;