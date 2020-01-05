import path from 'path';
process.env.NODE_CONFIG_DIR = path.join(__dirname, '../../config/env');
import express from 'express';
import request from 'supertest';
import { routerServer } from '../../components/routes';
import { db } from '../../config/database';

const app = express();
db.connect();

const mountRoutes = (app) => {
    routerServer.map((routes: any) => {
        Object.keys(routes).forEach((key) => {
            app.get(routes[key].mountPoint, routes[key].handler);
        });
    });
}

mountRoutes(app);

describe('Test of hotelDetail component', () => {
    it('It respond /hotelDetails', () => {
        return request(app).get('/hotelDetails')
            .expect(200).then((res) => expect(res.status).toEqual(200))
    });
    it('It respond /hotelDetail/id', () => {
        return request(app).get('/hotelDetail/5e0d2fd57c213e47b9c5345b')
            .expect(200).then((res) => expect(res.status).toEqual(200))
    });
})