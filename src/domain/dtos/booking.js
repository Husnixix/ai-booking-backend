"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookingDTO = void 0;
const zod_1 = require("zod");
exports.CreateBookingDTO = zod_1.z.object({
    hotelId: zod_1.z.string(),
    userId: zod_1.z.string(),
    customerName: zod_1.z.string(),
    customerPhone: zod_1.z.string(),
    guests: zod_1.z.object({
        adults: zod_1.z.number().min(1, "At least one adult is required"),
        children: zod_1.z.number().min(0, "Children cannot be negative"),
    }),
    checkIn: zod_1.z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid check-in date",
    }),
    checkOut: zod_1.z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid check-out date",
    }),
    noOfRooms: zod_1.z.number(),
});
