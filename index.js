import express from "express"
import dotenv from "dotenv"
const app = express()
dotenv.config();
const port=process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Cohort')
})
app.get('/aniket', (req, res) => {
  res.send('Awesome!!')
})
console.log("djfjf")
console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})