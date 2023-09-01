import express from "express";
import {userRouter, sellerRouter, serviceRouter, categoriesRouter} from "./routes/index.ts" 
import "./db"
import { logErrors } from "./middlewares/logError.middleware.ts";
import cors, { CorsOptions } from "cors"

const server = express();
const PORT = 3001;
const corsOptions: CorsOptions = {
    origin: "*",
    credentials: true
}

server.use(express.json());

server.use(cors(corsOptions))

server.listen(PORT, ()=> {
    console.log("Server running  in PORT 3001 my king :** ")
});

server.use("/", userRouter)
server.use("/", sellerRouter)
server.use("/", serviceRouter)
server.use("/", categoriesRouter)

server.use(logErrors)