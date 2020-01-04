import mongoose from 'mongoose';


const citiesSchema = new mongoose.Schema({
    name: String,
    country: String
});

export default citiesSchema;