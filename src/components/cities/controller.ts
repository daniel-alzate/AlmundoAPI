import { NextFunction, Request, Response } from 'express'
import { Services } from './services'

export const ControllerCities = {
    cities: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cities = await Services.getCities()
            res.send({ cities })
        } catch (error) {
            next({ error });
        }
    },
    city: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const city = await Services.getCity(req.params.id)
            res.send({ city })
        } catch (error) {
            next({ error });
        }
    }
}