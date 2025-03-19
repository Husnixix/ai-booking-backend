import express from "express";
import { getAllHotels } from "../applications/hotel/get-all-hotels";
import { createHotel } from "../applications/hotel/create-hotel";
import { getHotelById } from "../applications/hotel/get-hotel-by-id";
import { updateHotel } from "../applications/hotel/update-hotel";
import { deleteHotel } from "../applications/hotel/delete-hotel";

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels).post(createHotel);
hotelsRouter
    .route("/:id")
    .get(getHotelById)
    .put(updateHotel)
    .delete(deleteHotel);

export default hotelsRouter;