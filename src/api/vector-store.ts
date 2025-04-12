import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { OpenAIEmbeddings } from "@langchain/openai";
import mongoose from "mongoose";

const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-ada-002",
    openAIApiKey: process.env.OPENAI_API_KEY
});


export const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
    collection: mongoose.connection.collection("hotel_vectors"),
    indexName: "vector_index"
})




