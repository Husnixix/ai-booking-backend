import { NextFunction, Request, Response } from "express";
import { vectorStore } from "../../api/vector-store";
import Hotel from "../../infrastructure/schemas/Hotel";


export const optimizedSearch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { searchQuery } = req.body;

        if (!searchQuery || searchQuery == "") {
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
            return;
        }

        const results = await vectorStore.similaritySearchWithScore(searchQuery);
        console.log(results);

        const matchedHotels = await Promise.all(
            results.map((async (result) => {
                const hotel = await Hotel.findById(result[0].metadata._id)
                return {
                    hotel: hotel,
                    confidence: result[1]
                }
            }))
        )

        res.status(200).json(matchedHotels.length > 3 ? matchedHotels.slice(0, 3) : matchedHotels);


    } catch (error) {
        console.error("Error during optimized search:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}