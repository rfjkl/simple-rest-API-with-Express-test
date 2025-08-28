import { Request, Response, NextFunction } from "express";

export function myMiddleware(req : Request, res : Response, next : NextFunction){

    req.userId = new Date().getMilliseconds().toString()

    return next()
}