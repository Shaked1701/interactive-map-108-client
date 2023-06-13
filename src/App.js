import { useEffect, useLayoutEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";

import Bamza_108_Logo from "./images/Bamza_108.png";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  return (
    <div style={{ backgroundColor: "#00003f" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "1.5vw" }}>
          <img style={{ width: "3vw", height: "5.5vh" }} src={Bamza_108_Logo} />
        </div>
        <h1 style={{ fontSize: "40px", marginTop: "20px", color: "white" }}>
          {" "}
          מפת החירום של 108
        </h1>
      </div>
      <MapContainer
        style={{ height: "86vh", width: "100vw" }}
        center={[31.042, 34.8]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://localhost:8000/{z}/{x}/{y}.png"
        />
        <Marker position={[32.085, 34.78]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
