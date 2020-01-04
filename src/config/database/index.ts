import config from 'config';
import mongoose from 'mongoose';

const conn = config.get('server.db');

export const db = {
    connect(): void {
        mongoose.connect(`${conn}`, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection;
    }
}