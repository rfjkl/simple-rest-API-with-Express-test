import express from "express"
import { myMiddleware } from "./middlewares/myMiddleware.js"

const PORT = 3333

const app = express()
app.use(express.json())


app.get("/products", (req, res) =>{
    const {page, limit} = req.query

    res.send(`Produtos ${page} de ${limit}`)
})

// Middleware local
app.post("/products", myMiddleware, (req, res) =>{
    const {name , price} = req.body

    res.status(201).json({name, price, userId: req.userId})
})

app.listen(PORT, () =>{
    console.log("server is running on port: " + PORT);
})