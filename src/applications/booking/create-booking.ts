import { NextFunction, Request, Response } from "express";
import { CreateBookingDTO } from "../../domain/dtos/booking";
import ValidationError from "../../domain/errors/validation-error";
import Booking from "../../infrastructure/schemas/Booking";

export const createBooking = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Validate request body using Zod
        const booking = CreateBookingDTO.safeParse(req.body);
        if (!booking.success) {
            throw new ValidationError(booking.error.message);
        }

      
        // Create a new booking
        await Booking.create({
            hotelId: booking.data.hotelId,
            userId: booking.data.userId,
            checkIn: booking.data.checkIn,
            checkOut: booking.data.checkOut,
            guests: booking.data.guests,
            customerName: booking.data.customerName,
            customerPhone: booking.data.customerPhone,
            noOfRooms: booking.data.noOfRooms,
        });

        res.status(201).send({ message: "Booking created successfully" });
    } catch (error) {
        next(error);
    }
};
