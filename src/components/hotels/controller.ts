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
    }
};