import { NextFunction, Request, Response } from "express";
import Hotel from "../../infrastructure/schemas/Hotel";
import ValidationError from "../../domain/errors/validation-error";
import NotFoundError from "../../domain/errors/not-found-error";

import mongoose from "mongoose";

export const updateHotel = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const hotelId = req.params.id;
        const updatedHotel = req.body;

        if (!mongoose.Types.ObjectId.isValid(hotelId)) {
            res.status(400).json({ error: "Invalid hotel ID format" });
            return;
        }

        if (!updatedHotel.price) {
            throw new ValidationError("Invalid hotel data");
        }

        const hotel = await Hotel.findByIdAndUpdate(hotelId, updatedHotel, { new: true });

        if (!hotel) {
            res.status(404).json({ error: "Hotel not found" });
            return;
        }

        res.status(200).json({ message: "Hotel updated successfully", hotel });
    } catch (error) {
        next(error);
    }
};


