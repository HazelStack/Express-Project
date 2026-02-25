import express from 'express'
import cors from 'cors'
import questionsRouter from './Routers/questionsRouter.js'

const server = express();

server.use(cors())
server.use(express.json())  

server.use("/api/questions", questionsRouter)

server.get("/", (req, res) => {
  res.send("The server is running")
})

server.listen(4000, () => {
  console.log("Server is listening at port 4000 ...")
})