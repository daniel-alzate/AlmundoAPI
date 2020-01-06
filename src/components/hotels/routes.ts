import { hotelsController } from './controller';

export const hotelRoutes = {
    getHotels: {
        verb: 'get',
        mountPoint: '/hotels',
        handler: hotelsController.getHotels
    },
    getHotelsByCity: {
        verb: 'get',
        mountPoint: '/hotelsByCity/:id',
        handler: hotelsController.getHotelsByCity
    },
    getHotel: {
        verb: 'get',
        mountPoint: '/hotel/:id',
        handler: hotelsController.getHotel
    }
}