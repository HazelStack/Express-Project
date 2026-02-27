import express from "express";
import cors from "cors";
import usersRouter from "./Routers/usersRouter.js";
import questionsRouter from "./Routers/questionsRouter.js";
import categoriesRouter from "./Routers/categoriesRouter.js"

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", usersRouter);
server.use("/api/questions", questionsRouter);
server.use("/api/categories", categoriesRouter);

server.get("/", (req, res) => {
  res.send("Server is running");
});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
