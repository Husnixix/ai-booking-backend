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
exports.updateHotel = void 0;
const Hotel_1 = __importDefault(require("../../infrastructure/schemas/Hotel"));
const validation_error_1 = __importDefault(require("../../domain/errors/validation-error"));
const mongoose_1 = __importDefault(require("mongoose"));
const updateHotel = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotelId = req.params.id;
        const updatedHotel = req.body;
        if (!mongoose_1.default.Types.ObjectId.isValid(hotelId)) {
            res.status(400).json({ error: "Invalid hotel ID format" });
            return;
        }
        if (!updatedHotel.price) {
            throw new validation_error_1.default("Invalid hotel data");
        }
        const hotel = yield Hotel_1.default.findByIdAndUpdate(hotelId, updatedHotel, { new: true });
        if (!hotel) {
            res.status(404).json({ error: "Hotel not found" });
            return;
        }
        res.status(200).json({ message: "Hotel updated successfully", hotel });
    }
    catch (error) {
        next(error);
    }
});
exports.updateHotel = updateHotel;
