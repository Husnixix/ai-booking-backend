import { NextFunction, Request, Response } from "express";
import Hotel from "../../infrastructure/schemas/Hotel";


export const getAllHotels = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
        return;
    } catch (error) {
        next(error);
    }
};

