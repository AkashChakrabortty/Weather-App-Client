import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Card = ({city}) => {
  // console.log(city)
 const position = [city.lat,city.lon];
// const position = [22.3542, 90.3181];

    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <h3>{city.CityName}</h3>
          <div className="card-body">
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    );
};

export default Card;

