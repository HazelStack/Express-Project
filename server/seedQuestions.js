import express from "express";
import db from "./dbConnection.js";

const seedQuestionsRouter = express.Router();

seedQuestionsRouter.get("/seed-questions", async (req, res) => {
  try {
   const questions = [
  // Indoor plants
  { title: "Best indoor plants for low light?", userID: 1, categoryID: 1 },
  { title: "How to fertilize indoor plants?", userID: 1, categoryID: 1 },
  { title: "Best pots for indoor plants?", userID: 1, categoryID: 1 },
  { title: "Indoor plant pests: how to deal?", userID: 1, categoryID: 1 },
  { title: "Air-purifying indoor plants?", userID: 1, categoryID: 1 },
  { title: "How often to water indoor plants?", userID: 1, categoryID: 1 },

  // Outdoor plants
  { title: "Best outdoor plants for shade?", userID: 1, categoryID: 2 },
  { title: "How often to water outdoor garden?", userID: 1, categoryID: 2 },
  { title: "Outdoor plant soil tips?", userID: 1, categoryID: 2 },
  { title: "Preventing outdoor plant pests?", userID: 1, categoryID: 2 },
  { title: "Seasonal outdoor plants?", userID: 1, categoryID: 2 },
  { title: "Fertilizers for outdoor plants?", userID: 1, categoryID: 2 },

  // Pet friendly plants
  { title: "Plants safe for cats?", userID: 1, categoryID: 3 },
  { title: "Plants safe for dogs?", userID: 1, categoryID: 3 },
  { title: "Pet-friendly plants for indoors?", userID: 1, categoryID: 3 },
  { title: "Avoiding toxic plants for pets?", userID: 1, categoryID: 3 },
  { title: "Pet safe flowering plants?", userID: 1, categoryID: 3 },
  { title: "Pet safe succulents?", userID: 1, categoryID: 3 },
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