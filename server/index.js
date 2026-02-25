import express from "express";
import cors from "cors";
import usersRouter from "./Routers/usersRouter.js";
import questionsRouter from "./Routers/questionsRouter.js";

const server = express();

server.use(cors());
server.use(express.json());

// API routes
server.use("/api/login", usersRouter);
server.use("/api/questions", questionsRouter);

// Root test
server.get("/", (req, res) => {
  res.send("Server is running");
});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
