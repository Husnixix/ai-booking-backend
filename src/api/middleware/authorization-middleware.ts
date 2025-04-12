import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../../domain/errors/forbidden-error";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
   
    console.log("Full auth object:", req.auth);
    if (req?.auth?.sessionClaims?.metadata?.role !== "admin") {
        throw new ForbiddenError("Forbidden");
    }
    next();
}