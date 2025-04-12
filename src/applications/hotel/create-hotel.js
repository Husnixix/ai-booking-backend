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
exports.createHotel = void 0;
const Hotel_1 = __importDefault(require("../../infrastructure/schemas/Hotel"));
const hotels_1 = require("../../domain/dtos/hotels");
const validation_error_1 = __importDefault(require("../../domain/errors/validation-error"));
const createHotel = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotel = hotels_1.CreateHotelDTO.safeParse(req.body);
        if (!hotel.success) {
            throw new validation_error_1.default(hotel.error.message);
        }
        yield Hotel_1.default.create({
            name: hotel.data.name,
            location: hotel.data.location,
            image: hotel.data.image,
            price: hotel.data.price,
            description: hotel.data.description
        });
        res.status(201).send();
        return;
    }
    catch (error) {
        next(error);
    }
});
exports.createHotel = createHotel;
