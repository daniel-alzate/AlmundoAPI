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

describe('Test of Cities component', () => {
    it('It respond /cities', () => {
        return request(app).get('/cities')
            .expect(200).then((res) => expect(res.status).toEqual(200))
    });
    it('It respond /city/id', () => {
        return request(app).get('/city/5e0d8b167c213e47b9c54444')
            .expect(200).then((res) => expect(res.status).toEqual(200))
    });
})

