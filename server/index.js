import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import usersRouter from "./Routers/usersRouter.js";
import questionsRouter from "./Routers/questionsRouter.js";
import categoriesRouter from "./Routers/categoriesRouter.js";

const server = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(cors());
server.use(express.json());


server.use("/api/users", usersRouter);
server.use("/api/questions", questionsRouter);
server.use("/api/categories", categoriesRouter);


server.use(express.static(path.join(__dirname, "client/build")));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});