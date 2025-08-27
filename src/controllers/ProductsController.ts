import { Request, Response } from "express";
import { AppError } from "../Utils/AppError.js";

export class ProductsController{
    index(req : Request, res : Response){
        const {page, limit} = req.query
        
        res.send(`Produtos ${page} de ${limit}`)
    }

    create(req : Request, res : Response){
        const {name , price} = req.body

        if(!name){
            throw new AppError("Product name is mandatory!");
        }else if(!price){
            throw new AppError("Product price is mandatory!");
        }

        res.status(201).json({name, price, userId: req.userId})
    }
}