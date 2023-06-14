import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function Recenter({ lat, lng, zoom }) {
  const map = useMap();
  console.log("lat", lat);
  console.log("lng", lng);
  console.log("zoom", zoom);
  useEffect(() => {
    map.setView([lat, lng], zoom);
    // map.setZoom(zoom);
  }, [lat, lng]);
  return null;
}
