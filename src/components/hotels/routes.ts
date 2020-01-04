import { hotelsController } from './controller';

export const hotelRoutes = {
    getHotels: {
        verb: 'get',
        mountPoint: '/hotels',
        handler: hotelsController.getHotels
    }
}