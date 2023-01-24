import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Card = ({city}) => {
 const position = [city.lat,city.lon];
 const [weather,setWeather] = useState({});
 const [reFetch,setRefetch] = useState(false);
 useEffect(() => {
   fetch(
     `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=dfddcdf016eccd19fad36794d34d98db`
   )
     .then((res) => res.json())
     .then((data) => {
       const weatherInfo = {
         description: data.weather[0].description,
         main: data.weather[0].main,
         windSpeed: data.wind.speed,
       };
       setWeather(weatherInfo);
     });
 }, [reFetch]);
 //for refresh after 5min
 setInterval(() => {
   setRefetch(!reFetch);
 }, 300000);
    return (
      <div>
        <div className="card w-4/5 mx-auto bg-base-100 shadow-xl image-full">
          <div className="card-body">
            <h3 className="text-2xl text-center">{city.CityName}</h3>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={position}
              >
                <Popup>
                  <p>Main: {weather.main}</p>
                  <p>Description: {weather.description}</p>
                  <p>Wind Speed: {weather.windSpeed}</p>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    );
};

export default Card;

