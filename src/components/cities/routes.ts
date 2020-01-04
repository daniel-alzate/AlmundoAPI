import { ControllerCities } from './controller'

export const routesCity = {
  cities: {
    verb: 'get',
    mountPoint: '/cities',
    handler: ControllerCities.cities
  }
}