process.env.NODE_CONFIG_DIR = `${__dirname}/config/env`;
import InfraApp from './core';
import { db } from './config/database';
import { middlewareServer } from './middlewares';
import { routerServer } from './components/routes';

export default class Server extends InfraApp {
    constructor() {
        super();
        db.connect();
        this.mountMiddlewares(middlewareServer);
        this.mountRoutes(routerServer);
    }
    public static bootstrap(): Server {
        return new Server;
    }
}
Server.bootstrap().appStart()