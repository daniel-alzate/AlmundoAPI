import { hotelDetailController } from './controller';

export const hotelDetailRoutes = {
    getHotelDetails: {
        verb: 'get',
        mountPoint: '/hotelDetails',
        handler: hotelDetailController.getHotelDetails
    },
    getHotelDetail: {
        verb: 'get',
        mountPoint: '/hotelDetail/:id',
        handler: hotelDetailController.getHotelDetail
    }
}