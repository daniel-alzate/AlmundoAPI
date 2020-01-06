import { Request, Response, NextFunction } from 'express';
import { services } from './services';

export const hotelsController = {
    getHotels: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotels = await services.getHotels();
            res.send({ hotels });
        } catch (error) {
            next({ error });
        }
    },
    getHotelsByCity: async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const hotelsByCity = await services.getHotelsByCity(id)
            res.send({ hotelsByCity })
        } catch (error) {
            next({ error });
        }
    },
    getHotel: async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const hotel = await services.getHotel(id)
            res.send({ hotel })
        } catch (error) {
            next({ error });
        }
    }
};