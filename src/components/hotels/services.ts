import Hotels from './model';

export const services = {
    getHotels: async () => {
        try {
            const hotels = await Hotels.find()
            return hotels
        } catch (error) {
            return error
        }
    },
    getHotel: async (id: string) => {
        try {
            const hotel = await Hotels.findById(id)
            return hotel
        } catch (error) {
            return error;
        }
    }
};