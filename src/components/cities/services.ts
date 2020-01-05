import Cities from './model'

export const Services = {

    getCities: async () => {
        try {
            const cities = await Cities.find()
            return cities
        } catch (error) {
            return error
        }
    },
    getCity: async (id: string) => {
        try {
            const city = await Cities.findById(id)
            return city
        } catch (error) {
            return error
        }
    }
}