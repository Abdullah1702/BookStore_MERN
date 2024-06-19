import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import { route } from "./routes/booksRoute.js"
import cors from "cors"

const app = express()

// middleware for parsing request body
app.use(express.json())

// middleware for handling cors policy --> CORS is basically a protocol that check if share or not the content with another domain
// Option 1: Allow all origins with default of cors(*)
app.use(cors())
// Option2 : allow custom origins 
/* app.use(
    cors({
        origin: 'http://localhost:3010',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type'], 
    })
)   */

app.get('/', (req, res) =>{
    res.send("home sec")
})

app.use('/books', route)

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("app is connected to database")
        app.listen(PORT, ()=>{
            console.log("serven listening")
        })
    })
    .catch((error)=>{
        console.log(error)
    })