import { Request, Response } from "express";
import { AppError } from "../Utils/AppError.js";
import { z } from "zod";

export class ProductsController{
    index(req : Request, res : Response){
        const {page, limit} = req.query
        
        res.send(`Produtos ${page} de ${limit}`)
    }

    create(req : Request, res : Response){

        const bodySchema = z.object({
            name : z.string().trim().min(6, {message: "Name must have 6 or more characters"}),
            price : z.number({required_error: "Price is required", invalid_type_error: "Price must be a number", }).positive()
        })

        const {name, price} = bodySchema.parse(req.body)

        res.status(201).send({name, price, userId: req.userId})
    }
}