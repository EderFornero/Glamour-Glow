import express from "express";
import "./db"

const server = express();
const PORT = 3001;

server.use(express.json());

server.listen(PORT, ()=> {
    console.log("Server running  in PORT 3001 my king")
});


server.get("/holis", (_req, res)=> {
    console.log("Todo jalando como pedrada")
    res.send("Todo bien")
});

