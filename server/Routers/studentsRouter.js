import express from 'express'
import db from '../dbConnection.js'

const router = express.Router()

router.get("/", async (req, res)=>{
    let result = await db.query("select * from students")
    console.log (result)
    res.send("the request for student recieved 1")
});
router.get("/:id", (req, res)=>{
    res.send("the request for student received 2");
});


export default router;