import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config();

const db=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((req)=>{
        console.log("Connected to MONGO DB")
    })
    .catch((err)=>{
        console.log("Error connecting to MONGO DB")
    });
}

export default db;