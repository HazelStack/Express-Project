import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Routers
import usersRouter from "./Routers/usersRouter.js";
import questionsRouter from "./Routers/questionsRouter.js";
import categoriesRouter from "./Routers/categoriesRouter.js";

// DB connection (Postgres)
import "./dbConnection.js";

const server = express();
const PORT = process.env.PORT || 4000;

// __dirname setup for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
server.use(cors());
server.use(express.json());

// API routes
server.use("/api/users", usersRouter);
server.use("/api/questions", questionsRouter);
server.use("/api/categories", categoriesRouter);

// Serve React build
server.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all route for React
server.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Start server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});