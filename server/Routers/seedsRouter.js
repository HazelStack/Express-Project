import express from "express";
import db from "./dbConnection.js";

const seedRouter = express.Router();

seedRouter.get("/seed-categories", async (req, res) => {
  const categories = [
    { name: "Indoor Plants", description: "Plants suitable for indoor spaces" },
    { name: "Outdoor Plants", description: "Plants suitable for outdoor gardens" },
    { name: "Pet Friendly Plants", description: "Plants safe for homes with pets" },
  ];

  try {
    for (const cat of categories) {
      await db.query(
        'INSERT INTO categories (name, description) VALUES ($1, $2) ON CONFLICT DO NOTHING',
        [cat.name, cat.description]
      );
    }
    res.send("🎉 Categories seeded!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error seeding categories");
  }
});

export default seedRouter;