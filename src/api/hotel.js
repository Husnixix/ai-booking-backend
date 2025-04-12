"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_all_hotels_1 = require("../applications/hotel/get-all-hotels");
const create_hotel_1 = require("../applications/hotel/create-hotel");
const get_hotel_by_id_1 = require("../applications/hotel/get-hotel-by-id");
const update_hotel_1 = require("../applications/hotel/update-hotel");
const delete_hotel_1 = require("../applications/hotel/delete-hotel");
const authentication_middleware_1 = require("./middleware/authentication-middleware");
const authorization_middleware_1 = require("./middleware/authorization-middleware");
const index_hotels_1 = require("../applications/hotel/index.hotels");
const rag_search_1 = require("../applications/hotel/rag-search");
const hotelsRouter = express_1.default.Router();
hotelsRouter.route("/").get(get_all_hotels_1.getAllHotels).post(authentication_middleware_1.isAuthenticated, authorization_middleware_1.isAdmin, create_hotel_1.createHotel);
hotelsRouter.route("/:id").get(get_hotel_by_id_1.getHotelById).put(authentication_middleware_1.isAuthenticated, authorization_middleware_1.isAdmin, update_hotel_1.updateHotel).delete(authentication_middleware_1.isAuthenticated, authorization_middleware_1.isAdmin, delete_hotel_1.deleteHotel);
hotelsRouter.route("/index-hotels").post(index_hotels_1.indexHotels); // create a method to a automatically index when a hotel is creared
hotelsRouter.route("/search").post(rag_search_1.optimizedSearch);
exports.default = hotelsRouter;
