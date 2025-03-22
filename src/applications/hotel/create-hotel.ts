import { NextFunction, Request, Response } from "express";
import Hotel from "../../infrastructure/schemas/Hotel";
import { CreateHotelDTO } from "../../domain/dtos/hotels";
import ValidationError from "../../domain/errors/validation-error";



export const createHotel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hotel = CreateHotelDTO.safeParse(req.body);

        if (!hotel.success) {
            throw new ValidationError(hotel.error.message);
        }

        await Hotel.create({
            name: hotel.data.name,
            location: hotel.data.location,
            image: hotel.data.image,
            price: hotel.data.price,
            description: hotel.data.description
        });

         res.status(201).send(); 
         return;
    } catch (error) {
        next(error);
    }
};


