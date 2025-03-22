import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../../domain/errors/forbidden-error";

interface AuthenticatedRequest extends Request {
    auth?: {
        sessionClaims?: {
            metadata?: {
                role?: string;
            };
        };
    };
}

export const isAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
   
    console.log("Full auth object:", req.auth);
    if (req?.auth?.sessionClaims?.metadata?.role !== "admin") {
        throw new ForbiddenError("Forbidden");
    }
    next();
}