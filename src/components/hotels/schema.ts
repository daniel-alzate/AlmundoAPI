import mongoose from 'mongoose';

const HotelsSchema = new mongoose.Schema({
    name: String,
    stars: Number,
    image: String,
    price: Number,
    amenities: [String]
});
export default HotelsSchema;