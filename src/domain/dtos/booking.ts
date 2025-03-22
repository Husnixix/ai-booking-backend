import { z } from "zod";

export const CreateBookingDTO = z.object({
    hotelId: z.string(),
    userId: z.string(),
    customerName: z.string(),
    customerPhone: z.string(),
    guests: z.object({
        adults: z.number().min(1, "At least one adult is required"),
        children: z.number().min(0, "Children cannot be negative"),
    }),
    checkIn: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid check-in date",
    }),
    checkOut: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid check-out date",
    }),
    noOfRooms: z.number(),
});