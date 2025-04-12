import { NextFunction, Request, Response } from "express";
import Booking from "../../infrastructure/schemas/Booking";
export const getAllBookings = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
        return;
    } catch (error) {
        next(error);
    }
};