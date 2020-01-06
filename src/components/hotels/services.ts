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
    getHotelsByCity: async (city_id: string) => {
        try {
            const hotelsByCity = await Hotels.find({city_id: city_id})
            console.log(hotelsByCity)

            return hotelsByCity
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