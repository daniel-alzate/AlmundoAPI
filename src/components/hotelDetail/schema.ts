import mongoose from 'mongoose';

const HotelDetailSchema = new mongoose.Schema({
    name: String,
    stars: Number,
    images: [String],
    price: Number,
    amenities: [String],
    location: {
        coordinate: {
            latitude: Number,
            longitude: Number
        },
        address: String
    },
    description: String
});
export default HotelDetailSchema;