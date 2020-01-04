import { Document } from 'mongoose';

interface IHotels extends Document {
    name: String,
    stars: Number,
    image: String,
    price: Number
}