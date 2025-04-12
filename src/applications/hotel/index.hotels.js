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
exports.indexHotels = void 0;
const documents_1 = require("@langchain/core/documents");
const Hotel_1 = __importDefault(require("../../infrastructure/schemas/Hotel"));
const vector_store_1 = require("../../api/vector-store");
const indexHotels = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hotels = yield Hotel_1.default.find({});
    const docs = hotels.map((hotel) => {
        const { _id, location, price, description } = hotel;
        const doc = new documents_1.Document({
            pageContent: `${description} Located in ${location} Price per night ${price}`,
            metadata: {
                _id
            }
        });
        return doc;
    });
    yield vector_store_1.vectorStore.addDocuments(docs);
    res.status(201).json({ message: "Embeddings created successfully" });
});
exports.indexHotels = indexHotels;
