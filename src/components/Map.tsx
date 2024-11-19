import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents, useMap } from "react-leaflet";
import { useWeatherStore } from "../store/store";

export function AppMap() {
  const { coordinates, selectCoordinates } = useWeatherStore();

  function LocationMarker() {
    const map = useMap();
    useMapEvents({
      click(e) {
        selectCoordinates([e.latlng.lat, e.latlng.lng]);
        console.log(`Selected location: lat ${e.latlng.lat} • long ${e.latlng.lng}`);
        map.flyTo(e.latlng, map.getZoom());
      },
      locationfound(e) {
        selectCoordinates([e.latlng.lat, e.latlng.lng]);
        console.log(`Selected location: lat ${coordinates?.[0]} • long ${coordinates?.[1]}`);
      },
    });

    return location ? (
      <Marker position={coordinates ?? [0, 0]}>
        <Popup>
          Position : lat:{coordinates?.[0]}, long:{coordinates?.[1]}
        </Popup>
      </Marker>
    ) : null;
  }

  const handleGeolocate = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      selectCoordinates([position.coords.latitude, position.coords.longitude]);
      console.log("Detected location:", position.coords);
    });
  };

  return (
    <>
      <button type="button" onClick={handleGeolocate}>
        Geolocate Me!
      </button>
      <MapContainer id="map" center={[43.533329, 5.43333]} zoom={13} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </>
  );
}
