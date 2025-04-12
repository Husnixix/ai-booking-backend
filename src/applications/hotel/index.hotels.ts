import { Document } from "@langchain/core/documents";
import Hotel from "../../infrastructure/schemas/Hotel"
import { vectorStore } from "../../api/vector-store";
import { NextFunction, Request, Response } from "express";

export const indexHotels = async (req: Request, res: Response, next: NextFunction) => {
    const hotels = await Hotel.find({});

    const docs = hotels.map((hotel) => {
        const { _id, location, price, description } = hotel;
        const doc = new Document({
            pageContent: `${description} Located in ${location} Price per night ${price}`,
            metadata: {
                _id
            }
        })
        return doc
    })

    await vectorStore.addDocuments(docs);

    res.status(201).json({ message: "Embeddings created successfully" });
}