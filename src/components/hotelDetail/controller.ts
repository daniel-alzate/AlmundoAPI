import { Request, Response, NextFunction } from 'express';
import { services } from './services';

export const hotelDetailController = {
    getHotelDetails: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hotelDetails = await services.getHotelDetails();
            res.send({ hotelDetails });
        } catch (error) {
            next({ error });
        }
    },
    getHotelDetail: async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            const hotelDetail = await services.getHotelDetail(id)
            res.send({ hotelDetail })
        } catch (error) {
            next({ error });
        }
    }
};