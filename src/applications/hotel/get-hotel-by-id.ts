import { NextFunction, Request, Response } from "express";
import Hotel from "../../infrastructure/schemas/Hotel";

export const getHotelById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            res.status(404).send();
            return;
        }
        res.status(200).json(hotel);
        return;
    } catch (error) {
        next(error);
    }
}