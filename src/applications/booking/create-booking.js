"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const booking_1 = require("../../domain/dtos/booking");
const validation_error_1 = __importDefault(require("../../domain/errors/validation-error"));
const Booking_1 = __importDefault(require("../../infrastructure/schemas/Booking"));
const createBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body using Zod
        const booking = booking_1.CreateBookingDTO.safeParse(req.body);
        if (!booking.success) {
            throw new validation_error_1.default(booking.error.message);
        }
        // Create a new booking
        yield Booking_1.default.create({
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
    }
    catch (error) {
        next(error);
    }
});
exports.createBooking = createBooking;
