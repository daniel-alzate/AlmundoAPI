import { hotelRoutes } from './hotels/routes';
import { routesCity } from './cities/routes';
import { hotelDetailRoutes } from './hotelDetail/routes';

export const routerServer = [
    hotelRoutes,
    routesCity,
    hotelDetailRoutes
]