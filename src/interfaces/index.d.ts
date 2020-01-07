import { Document } from 'mongoose';

interface Error {
    status?: number;
    message?: string;
}

interface IHotels extends Document {
    name: String,
    stars: Number,
    image: String,
    price: Number,
    amenities: String[],
    city: {
        id: String,
        name: String,
        country: String
    }
}

interface IHotelDetail extends Document {
    name: String,
    stars: Number,
    image: String,
    price: Number,
    amenities: String[],
    location: {
        coordinate: {
            latitude: Number,
            longitude: Number
        },
        address: String
    },
    description: String
}

interface ICities extends Document {
    name: string,
    country: string
}