import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../Map/Map.css";
import Recenter from "../../Recenter";
import L from "leaflet";

function Map({ search }) {
  //db example
  const peopleJson = [
    {
      name: "יובל שוורצמן",
      id: "9147095",
      address: 'הרשב"א 19 ,ראשון לציון',
      city: "ראשון לציון",
      coordinates: [31.969412399626645, 34.79829365674856],
    },
    {
      name: "עידן גונן",
      id: "8798516",
      address: "יום הכיפורים 16",
      city: "חולון",
      coordinates: [32.0166666, 34.7666636],
    },
    {
      name: "טר שקדן",
      id: "9009658",
      address: "לוין אפשטיין 35",
      city: "רחובות",
      coordinates: [31.894756, 34.809322],
    },
  ];

  //icon for markers
  const iconPerson = new L.Icon({
    iconUrl: require("../../images/location-pin.png"),
    iconRetinaUrl: require("../../images/location-pin.png"),
    iconSize: new L.Point(30, 30),
  });
  //states
  const [mapZoom, setMapZoom] = useState(8);
  const [center, setCenter] = useState([31.042, 34.8]);

  console.log(center);
  useEffect(() => {
    if (search === peopleJson.name || search === peopleJson.id) {
      setMapZoom(11);
      setCenter(peopleJson[0].coordinates);
    }
  }, [search]);

  return (
    <MapContainer
      style={{ height: "86vh", width: "100vw" }}
      center={center}
      zoom={mapZoom}
      scrollWheelZoom={false}
    >
      <Recenter lat={center[0]} lng={center[1]} zoom={mapZoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://localhost:8000/{z}/{x}/{y}.png"
      />
      {peopleJson.map((people) => {
        console.log(people);
        return (
          <Marker
            key={people.id}
            position={people.coordinates}
            icon={iconPerson}
          >
            <Popup>
              {people.name} - {people.id} - {people.address}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
