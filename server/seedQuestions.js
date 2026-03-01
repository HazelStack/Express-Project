import express from "express";
import db from "./dbConnection.js";

const seedQuestionsRouter = express.Router();

seedQuestionsRouter.get("/seed-questions", async (req, res) => {
  try {
    // Replace userID with your registered user’s ID on the live database
    const questions = [
      { title: "Best indoor plants for low light?", userID: 1, categoryID: 1 },
      { title: "How often should I water outdoor plants?", userID: 1, categoryID: 2 },
      { title: "Which plants are safe for cats and dogs?", userID: 1, categoryID: 3 },
    ];

    for (const q of questions) {
      await db.query(
        'INSERT INTO questions (title, "userID", "categoryID") VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
        [q.title, q.userID, q.categoryID]
      );
    }

    res.send("🎉 Questions seeded!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error seeding questions");
  }
});

export default seedQuestionsRouter;