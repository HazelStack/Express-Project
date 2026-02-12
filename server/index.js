import express from 'express'
import cors from 'cors'
import studentsRouter from './Routers/studentsRouter.js'
import coursesRouter from './Routers/coursesRouter.js'

const server = express();
server.use (cors())

server.use ("/students", studentsRouter)
server.use ("/courses", coursesRouter)
server.get ("/", (req,res)=> {                  // "This code tells the server what to do when someone visits the home page."
  res.send ("The server is running ")
})

server
.listen (4000, ()=>{
  console.log ("Server is listening at port 4000 ...")
})