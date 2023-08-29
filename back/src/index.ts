// import mongoose from "mongoose";
import express from "express";

const server = express();
const PORT = 3000;

server.use(express.json());

server.listen(PORT, ()=> {
    console.log("Server running  in PORT 3000 my king")
});


server.get("/holis", (_req, res)=> {
    console.log("Todo jalando como pedrada")
    res.send("Todo bien")
});

