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
    amenities: String[]
}

interface ICities extends Document {
    name: string,
    country: string
}