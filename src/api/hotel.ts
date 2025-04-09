import express from "express";
import { getAllHotels } from "../applications/hotel/get-all-hotels";
import { createHotel } from "../applications/hotel/create-hotel";
import { getHotelById } from "../applications/hotel/get-hotel-by-id";
import { updateHotel } from "../applications/hotel/update-hotel";
import { deleteHotel } from "../applications/hotel/delete-hotel";
import { isAuthenticated } from "./middleware/authentication-middleware";
import { isAdmin } from "./middleware/authorization-middleware";
import { indexHotels } from "../applications/hotel/index.hotels";
import { optimizedSearch } from "../applications/hotel/rag-search";

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(isAuthenticated, getAllHotels).post(isAuthenticated, isAdmin, createHotel);
hotelsRouter.route("/:id").get(getHotelById).put(updateHotel).delete(deleteHotel);
hotelsRouter.route("/index-hotels").post(indexHotels);
hotelsRouter.route("/search").post(optimizedSearch);

export default hotelsRouter;