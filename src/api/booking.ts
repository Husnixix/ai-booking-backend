import { createBooking } from "../applications/booking/create-booking";
import { getAllBookings } from "../applications/booking/get-all-bookings";
import express from "express";

const bookingsRouter = express.Router();

bookingsRouter.route("/").post(createBooking);
bookingsRouter.route("/").get(getAllBookings);

export default bookingsRouter;