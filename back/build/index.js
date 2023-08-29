"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose from "mongoose";
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const PORT = 3000;
server.use(express_1.default.json());
server.listen(PORT, () => {
    console.log("Server running  in PORT 3000 my king");
});
server.get("/holis", (_req, res) => {
    console.log("Todo jalando como pedrada");
    res.send("Todo bien");
});
