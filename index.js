const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const Connection=require("./database/db")
const Book=require('./routes/book')
const Section=require('./routes/section')
dotenv.config()

const port=process.env.PORT
const app=express()


app.use(express.json())
app.use(cors())


app.use('/api/book',Book)
app.use('/api/section',Section)


Connection()

app.listen(port,()=>console.log(` server is running  on  http://localhost:${port}`))