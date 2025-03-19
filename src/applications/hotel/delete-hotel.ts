import { NextFunction, Request, Response } from "express";
import Hotel from "../../infrastructure/schemas/Hotel";


export const deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            res.status(404).send();
            return;
        }
        res.status(204).send();
        return;
    } catch (error) {
        next(error);
    }
}