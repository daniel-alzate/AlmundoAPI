import { hotelsController } from './controller';

export const hotelRoutes = {
    getHotels: {
        verb: 'get',
        mountPoint: '/hotels',
        handler: hotelsController.getHotels
    },
    getHotel: {
        verb: 'get',
        mountPoint: '/hotel/:id',
        handler: hotelsController.getHotel
    }
}