import Hotels from './model';

export const services = {
    getHotels: async () => {
        try {
            const hotels = await Hotels.find()
            return hotels
        } catch (error) {
            return error
        }
    }
};