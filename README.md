# AlmundoAPI


### Instalación

```bash
# Clonar repositorio 
$ git clone https://github.com/daniel-alzate/AlmundoAPI.git

# Instalar dependencias con NPM
$ npm install

# Iniciar servidor de desarrollo
$ npm run dev
```
ir a http://localhost:5001 en el navegador.


# Tabla de contenido


* [Ambientes](#ambientes)
* [Pruebas](#pruebas)
* [Endpoints](#endpoints)
* [Schema](#schema)

 ## Ambientes
 Las variables de entorno para `development`, `test` y `production` se encuentran en la ruta `AlmundoAPI\src\config\env`

```
{
    "server": {
        "env": "development",
        "port": 5001,
        "db": "mongodb://danielalza:danielalza123@ds235609.mlab.com:35609/myapi"    
    }
}
```````

## Pruebas

Para validar la operación básica de la API puede ejecutar pruebas unitarias con el siguiente comando:

* `npm run test`


## Endpoints
Esta API incluye los siguientes endpoints:


+ getCities
```ruby
    GET: /cities
```
+ getCity
```ruby
    GET: /city/id
```


+ getHotels
```ruby
    GET: /hotels
```
+ getHotelsByCity
```ruby
    GET: /hotelsByCity/id
```
+ getHotel
```ruby
    GET: /hotel/id
```


+ getHotelDetails
```ruby
    GET: /hotelDetails
```
+ getHotelDetail
```ruby
    GET: /hotelDetail/id
```



## Schema
El modelo del detalle de los Hotel se define como en el siguiente ejemplo:

```json
{
    "_id": {
        "$oid": "5e12a702e7179a2f0109d55d"
    },
    "hotel_id": "5e12a664e7179a2f0109d54d",
    "city": {
        "id": "5e0d8cbc7c213e47b9c54499",
        "name": "Río de Janeiro",
        "country": "Brasil"
    },
    "name": "Hotel Regina",
    "stars": 3,
    "images": [
        "https://images.almundo.com/201/1000000/700000/694200/694146/6a438273_z.jpg",
        "https://images.almundo.com/201/1000000/700000/694200/694146/fe0382cd_z.jpg",
        "https://images.almundo.com/201/1000000/700000/694200/694146/8649b7d7_z.jpg",
        "https://images.almundo.com/201/1000000/700000/694200/694146/dea5945c_z.jpg",
        "https://images.almundo.com/201/1000000/700000/694200/694146/fa25a878_z.jpg"
    ],
    "price": 151145,
    "amenities": [
        "wifi",
        "local-bar",
        "live-tv"
    ],
    "location": {
        "coordinate": {
            "latitude": -22.927584,
            "longitude": -43.174714
        },
        "address": "Rua Ferreira Viana, 29 - Flamengo, Río de Janeiro"
    },
    "description": "Si decides alojarte en Hotel Regina, disfrutarás de una fantástica ubicación en el centro de Río de Janeiro, a solo 15 minutos en coche de Catedral de São Sebastião do Rio de Janeiro y Biblioteca Nacional. Además, este hotel se encuentra a 0,7 km de Playa de Flamengo y a 3,8 km de Museo de Arte Moderno"
}
```
