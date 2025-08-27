import { Request, Response, NextFunction } from "express";

export function myMiddleware(req : Request, res : Response, next : NextFunction){
    console.log("Passou pelo middleware")
    req.userId = "123"

    return next()
}