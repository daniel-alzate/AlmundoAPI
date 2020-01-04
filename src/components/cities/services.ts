import Cities from './model'

export const Services = {

    getCities: async () => {
        try {
            const cities = await Cities.find()
            return cities
        } catch (error) {
            return error
        }
    }
}