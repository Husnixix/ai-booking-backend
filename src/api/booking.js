"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_booking_1 = require("../applications/booking/create-booking");
const get_all_bookings_1 = require("../applications/booking/get-all-bookings");
const express_1 = __importDefault(require("express"));
const bookingsRouter = express_1.default.Router();
bookingsRouter.route("/").post(create_booking_1.createBooking);
bookingsRouter.route("/").get(get_all_bookings_1.getAllBookings);
exports.default = bookingsRouter;
