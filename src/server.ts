import express, { NextFunction, Request, Response } from "express"
import { routes } from "./routes/index.js"
import { AppError } from "./Utils/AppError.js"

const PORT = 3333

const app = express()
app.use(express.json())
app.use(routes)

app.use((error: any, req : Request, res : Response, _ : NextFunction) =>{

    if(error instanceof AppError){
        res.status(error.statusCode).json({message: error.message})
    }
    
    res.status(500).json({message: error.message})
})

app.listen(PORT, () =>{
    console.log("server is running on port: " + PORT);
})