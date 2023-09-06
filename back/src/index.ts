import express from "express";
import {userRouter, sellerRouter, serviceRouter, categoriesRouter, reviewsRouter} from "./routes/index.ts" 
import "./db"
import { logErrors } from "./middlewares/logError.middleware.ts";
import cors, { CorsOptions } from "cors"
import { paymentRouter } from "./routes/payment/index.ts";
import passport from "passport";
import passportMiddleware from "./middlewares/passport.ts";
import session from "express-session";
import "dotenv/config"
const {TOKEN_ENCRYPTION} = process.env

const server = express();
const PORT = 3001;
const corsOptions: CorsOptions = {
    origin: "*",
    credentials: true
}

server.use(express.json());

server.use(cors(corsOptions))
server.use(session({
    secret: TOKEN_ENCRYPTION!, 
    resave: false,
    saveUninitialized: true,
}))
passport.use(passportMiddleware);

server.listen(PORT, ()=> {
    console.log("Server running  in PORT 3001 my king :** ")
});

server.use("/", userRouter)
server.use("/", sellerRouter)
server.use("/", serviceRouter)
server.use("/", categoriesRouter)
server.use("/", reviewsRouter)
<<<<<<< HEAD
server.use("/", paymentRouter)
=======

server.use(passport.initialize()); 
>>>>>>> be2f0f5eae4d2a4520685a7e90e5c96615b38aa5
server.use(logErrors)