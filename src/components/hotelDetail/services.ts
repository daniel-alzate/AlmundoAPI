import HotelDetail from './model';

export const services = {
    getHotelDetails: async () => {
        try {
            const hotelDetails = await HotelDetail.find()
            return hotelDetails
        } catch (error) {
            return error
        }
    },
    getHotelDetail: async (hotel_id: string) => {
        try {
            const hotelDetail = await HotelDetail.findOne({hotel_id:hotel_id})
            return hotelDetail
        } catch (error) {
            return error;
        }
    }
};