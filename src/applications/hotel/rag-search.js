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
exports.optimizedSearch = void 0;
const vector_store_1 = require("../../api/vector-store");
const Hotel_1 = __importDefault(require("../../infrastructure/schemas/Hotel"));
const optimizedSearch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchQuery } = req.body;
        if (!searchQuery || searchQuery == "") {
            const hotels = yield Hotel_1.default.find();
            res.status(200).json(hotels);
            return;
        }
        const results = yield vector_store_1.vectorStore.similaritySearchWithScore(searchQuery);
        console.log(results);
        const matchedHotels = yield Promise.all(results.map(((result) => __awaiter(void 0, void 0, void 0, function* () {
            const hotel = yield Hotel_1.default.findById(result[0].metadata._id);
            return {
                hotel: hotel,
                confidence: result[1]
            };
        }))));
        res.status(200).json(matchedHotels.length > 3 ? matchedHotels.slice(0, 3) : matchedHotels);
    }
    catch (error) {
        console.error("Error during optimized search:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.optimizedSearch = optimizedSearch;
