"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vectorStore = void 0;
const mongodb_1 = require("@langchain/mongodb");
const openai_1 = require("@langchain/openai");
const mongoose_1 = __importDefault(require("mongoose"));
const embeddings = new openai_1.OpenAIEmbeddings({
    model: "text-embedding-ada-002",
    openAIApiKey: process.env.OPENAI_API_KEY
});
exports.vectorStore = new mongodb_1.MongoDBAtlasVectorSearch(embeddings, {
    collection: mongoose_1.default.connection.collection("hotel_vectors"),
    indexName: "vector_index"
});
