import express from "express"

const PORT = 3333

const app = express()

app.listen(PORT, () =>{
    console.log("server is running on port: " + PORT);
})