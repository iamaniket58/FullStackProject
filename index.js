import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import db from "./utils/db.js"
const app = express()
dotenv.config();

app.use(cors({
    origin: process.env.BASE_URL, //Allowed request
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json());
app.use(express.urlencoded({ extend: true }))
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Cohort')
})
app.get('/aniket', (req, res) => {
    res.send('Awesome!!')
})

//Connect to DB
db();
console.log("djfjf")
console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})