import express from "express";
<<<<<<< HEAD
import {
  userRouter,
  sellerRouter,
  serviceRouter,
  categoriesRouter,
  reviewsRouter,
} from "./routes/index.ts";
import "./db";
=======
import {userRouter, sellerRouter, serviceRouter, categoriesRouter, reviewsRouter, nodemailerRouter } from "./routes/index.ts" 
import "./db"
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
import { logErrors } from "./middlewares/logError.middleware.ts";
import cors, { CorsOptions } from "cors";
import { paymentRouter } from "./routes/payment/index.ts";
import passport from "passport";
import passportMiddleware from "./middlewares/passport.ts";
import session from "express-session";
import "dotenv/config"
const {TOKEN_ENCRYPTION, PORT} = process.env
import cookieParser from "cookie-parser";

import "dotenv/config";


const server = express();
const corsOptions: CorsOptions = {
  origin: "*",
  credentials: true,
};

server.use(cookieParser());
server.use(express.json());

server.use(cors(corsOptions));
server.use(
  session({
    secret: TOKEN_ENCRYPTION!,
    resave: false,
    saveUninitialized: true,
  })
);
passport.use(passportMiddleware);

server.listen(PORT, ()=> {
    console.log(`Server running  in PORT ${PORT}`)
});

server.use("/", userRouter)
server.use("/", sellerRouter)
server.use("/", serviceRouter)
server.use("/", categoriesRouter)
server.use("/", reviewsRouter)
server.use("/", paymentRouter)
<<<<<<< HEAD

server.use(passport.initialize()); 
server.use(logErrors)
server.use("/", userRouter);
server.use("/", sellerRouter);
server.use("/", serviceRouter);
server.use("/", categoriesRouter);
server.use("/", reviewsRouter);
server.use("/", paymentRouter);

=======
server.use("/", nodemailerRouter)

>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
server.use(passport.initialize());
server.use(logErrors);
