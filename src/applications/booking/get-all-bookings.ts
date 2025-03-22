// export const getAllBookingsForHotel = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     try {
//         const hotelId = req.params.hotelId;
//         const bookings = await Booking.find({ hotelId: hotelId });
//         const bookingsWithUser = await Promise.all(bookings.map(async (el) => {
//             const user = await clerkClient.users.getUser(el.userId);
//             return { _id: el._id, hotelId: el.hotelId, checkIn: el.checkIn, checkOut: el.checkOut, roomNumber: el.roomNumber, user: { id: user.id, firstName: user.firstName, lastName: user.lastName } }
//         }))

//         res.status(200).json(bookingsWithUser);
//         return;
//     } catch (error) {
//         next(error);
//     }
// };

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