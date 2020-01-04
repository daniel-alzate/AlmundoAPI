import config from 'config';
import express from 'express';

export default class InfraApp {
    private app: any;
    private port = config.get('server.port') || 3000;

    constructor() {
        this.app = express();
    }
    public mountMiddlewares(middlewareServer: any): void {
        Object.keys(middlewareServer).forEach((key) => {
            this.app.use(middlewareServer[key].handler);
        });
    }
    public mountRoutes(routerServer: any): void {
        routerServer.map((routes: any) => {
            Object.keys(routes).forEach((key) => {
                this.app.get(routes[key].mountPoint, routes[key].handler);
            });
        });
    }
    public appStart(): void {
        this.app.listen(this.port, () => console.log('app listening'));
    }
}