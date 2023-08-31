import {connect} from "mongoose";
import {mongodb} from "./keys"

(async () => {
    connect(mongodb.URI) 
.then(_db => console.log(`db is connected`))
.catch(error => console.log(error))
})()
