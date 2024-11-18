import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function AppMap() {
  return (
    <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>Wow! A nice popup!</Popup>
      </Marker>
    </MapContainer>
  );
}
