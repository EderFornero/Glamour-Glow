import mongoose from "mongoose";
import {mongodb} from "./keys"

mongoose.connect(mongodb.URI) 
.then(_db => console.log(`db is connected`))
.catch(error => console.log(error))