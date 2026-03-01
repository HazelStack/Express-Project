import express from "express";
import db from "../dbConnection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM categories");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;