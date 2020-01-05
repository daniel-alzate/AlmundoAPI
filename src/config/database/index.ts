import config from 'config';
import mongoose from 'mongoose';
import { log } from '../logger';

const conn = config.get('server.db');

export const db = {
    connect(): void {
        mongoose.connect(`${conn}`, {useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection
            .once('open', () => log.info('MongoDB connection success'))
            .on('error', e => {
                log.error(e);
                throw e;
            });
    }
}